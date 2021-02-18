import { NavigationContainerRef } from '@react-navigation/native'
import React, { RefObject } from 'react'

export const navigationRef = React.createRef()

export const RootNavigation = (name) => {
	navigationRef.current?.reset({
		index: 0,
		routes: [{ name: name }],
	  });
}
