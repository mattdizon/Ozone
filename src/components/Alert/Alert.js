import React from 'react'
import { Alert } from 'react-native'

export const createTwoButtonAlert = ({title}) =>
Alert.alert(
  title,
  'Please Try Again' ,
  [
    { text: "OK", onPress: () => console.log("OK Pressed") }
  ],
  { cancelable: false }
);