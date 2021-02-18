import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native-paper'
import 'react-native-gesture-handler';
import { ISAUTH, LOGIN, SIGNUP } from '../utils/helpers/routes'
import { IsAuth } from '../stacks/IsAuth/IsAuth'
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, RootNavigation } from './RootNavigation'
import { Login } from '../screens/Login/Login'
import { SignUp } from '../screens/SignUp/SignUp'
import { BASE_URL, SIGNOUT } from '../utils/helpers/constants'
import { Context } from '../provider/AppProvider'
export const  Navigation = () => {

	const Stack = createStackNavigator()
	const myContext = useContext( Context )

	const signOut = async () => {
		await fetch(`${BASE_URL}/${SIGNOUT}`, {
			method: 'DELETE',
			headers: {
			  'client' :myContext. client,
			  'access-token': myContext.accessToken,
			  'uid': myContext.uid
			},
		  })
		  RootNavigation(LOGIN)
	}
    return (
		 <NavigationContainer ref={navigationRef}>
			 <Stack.Navigator>
			 <Stack.Screen
                    name={LOGIN}
                    component={Login} 
                />
                <Stack.Screen
                    name={SIGNUP}
                    component={SignUp} 
                />
						<Stack.Screen name={ISAUTH}	
							component={IsAuth}  
							options={{
								title:"Ozone",
								headerLeft: () => (
									<Text onPress={() => { signOut() }}>
										Logout
									</Text>
								  ),
							}}
						/>
			 </Stack.Navigator>
		</NavigationContainer>
    )
}
