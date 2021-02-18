import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { Surveys } from '../../screens/Earn/Surveys'
import { Deals } from '../../screens/Deals/Deals'

export const IsAuth = () => {
	const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
        initialRouteName="Earn" 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName=""
                if (route.name==="Earn"){
                    iconName="logo-usd"
                } else if( route.name === "Deals"){
                    iconName="pricetags"
                }
                return  <Ionicons name={iconName} size={24} color={color} />; 
            }
        })}
        >
            <Tab.Screen name="Earn" component={ Surveys }/>
            <Tab.Screen name="Deals" component={ Deals }/>

        </Tab.Navigator>
)
}