import React, { useState } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { styles } from '../styles'
import { loginStyles } from '../Login/styles'
import { signUp } from './service'
export const  SignUp = () =>  {
    
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
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
                Login
            </Button>
            </View>        
        </SafeAreaView>
    )
}
