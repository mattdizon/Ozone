import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../../screens/Login/Login'
import { SignUp } from '../../screens/SignUp/SignUp'
import React from 'react'

export const NoAuth = () =>{
    const Stack = createStackNavigator();
    return (
            <>
                <Stack.Screen
                    name="Login"
                    component={Login} 
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp} 
                />
            </>
    )
}
