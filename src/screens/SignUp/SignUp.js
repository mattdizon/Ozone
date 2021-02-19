import React, { useState, useContext } from 'react'
import { SafeAreaView, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { styles } from '../styles'
import { loginStyles } from '../Login/styles'
import { signUpAction } from './service'
import { Context } from '../../provider/AppProvider'
import { useNavigation } from '@react-navigation/native';
import { ISAUTH } from '../../utils/helpers/routes';
export const  SignUp = () =>  {
    
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const navigation = useNavigation();
    const myContext = useContext(Context)

    const signUp = async(email, password) => {
        const signUpData = await signUpAction(email, password)
        myContext.setAccessToken(signUpData.accessToken)
        myContext.setClient(signUpData.client)
        myContext.setUid(signUpData.uid)
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
            <Button 
                mode="contained" 
                onPress={() => signUp(email, password)}
                style={loginStyles.loginButton}
            >
                Sign Up
            </Button>
            </View>        
        </SafeAreaView>
    )
}
