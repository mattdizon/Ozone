import React, { useContext, useEffect, useState } from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import SurveyCard from '../../components/SurveyCard'
import { Context } from '../../provider/AppProvider'
import { getSurveys } from './services'

export const Surveys = () => {
    const myContext = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)


    const getData = async () => {
        let completedSurveys  = myContext.completedSurveys 
        let incompletedSurveys  = myContext.incompleteSurveys
        if( completedSurveys === undefined && incompletedSurveys === undefined){
            let surveys = await getSurveys( myContext.accessToken, myContext.client, myContext.me.uid)
            myContext.setCompletedSurveys(surveys.completedSurveys)
            myContext.setIncompleteSurveys(surveys.incompleteSurveys)
        }
   }

    useEffect(()=> {
        getData()
        setIsLoading(false)
	},[isLoading])
    
    const renderSurveyCard = ( item ) => <SurveyCard item={item} />
    // time to render list :) 
    return (
        <SafeAreaView>
            <View>
                <FlatList 
                    style={{ flexGrow: 0}} 
                    data={myContext.incompleteSurveys} 
                    renderItem={renderSurveyCard}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    )
}
