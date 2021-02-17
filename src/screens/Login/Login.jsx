import React, { useState, useContext } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { styles } from '../styles'
import { loginStyles } from './styles'
import { signInAction } from './service'
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../provider/AppProvider'
import { ISAUTH, SIGNUP } from '../../utils/helpers/routes';

export const  Login = () =>  {
    
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const navigation = useNavigation();
    const myContext = useContext(Context)

    const signIn = async(email, password) => {
        const signInData = await signInAction(email, password) 

        myContext.setAccessToken(signInData.accessToken)
        myContext.setClient(signInData.client)
        myContext.setMe(signInData.me)
 
        navigation.reset({
            index: 0,
            routes: [{ name: ISAUTH }],
        });
    }
    return (
        <SafeAreaView>
            <View style={ styles.container }>
            <TextInput
                label="Email"
                value={email}
                onChangeText={email => setEmail(email)}
                style={ loginStyles.loginForm }
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={password => setPassword(password)}
                style={ loginStyles.loginForm }
            />
            <Text 
                style={loginStyles.forgotPassword}
                onPress={()=> navigation.navigate(SIGNUP)}
            >Sign Up</Text>
            <Button 
                mode="contained" 
                onPress={() => {
                    signIn(email, password)
                }}
                style={loginStyles.loginButton}
            >
                Login
            </Button>
            </View>        
            </SafeAreaView>
    )
}
