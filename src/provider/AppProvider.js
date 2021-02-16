import React, { createContext, useState } from 'react'

const context = {
	me: {},
	setMe: () => {},
	accessToken:'',
	setAccessToken: () => {},
	client: '',
	setClient: () => {},
	completedSurveys:[],
	setCompletedSurveys:() => {},
	incompleteSurveys:[],
	setIncompleteSurveys:() => {},
	coupons: [],
	setCoupons: () => {}
}

export const Context = createContext(context)

export const Provider = (props) => {

	const [me, setMe] = useState({})
	const [accessToken, setAccessToken] = useState()
	const [client, setClient] = useState()
	const [completedSurveys, setCompletedSurveys] = useState()
	const [incompleteSurveys, setIncompleteSurveys] = useState()
	const [coupons, setCoupons] = useState()
	
	return (
		<Context.Provider
			value={{
				me,
				setMe,
				accessToken,
				setAccessToken,
				client,
				setClient,
				completedSurveys,
				setCompletedSurveys,
				incompleteSurveys,
				setIncompleteSurveys,
				incompleteSurveys,
				setIncompleteSurveys,
				coupons,
				setCoupons,
			}}
		>
			{props.children}
		</Context.Provider>
	)
}
