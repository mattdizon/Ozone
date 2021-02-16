import React, { useContext, useEffect, useState } from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import { Context } from '../../provider/AppProvider'
import { getDeals } from './services'
import Coupon from './components/Coupon'

export const Deals = () => {
    const myContext = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () => {
        let coupons = myContext.coupons
        if( coupons === undefined ){
            let couponData = await getDeals( myContext.accessToken, myContext.client, myContext.me.uid)
            myContext.setCoupons(couponData)
        }
        console.log(myContext)
   }
   
   useEffect(()=> {
    getData()
    setIsLoading(false)
},[isLoading])

    const renderCoupon = ( item ) => <Coupon item={item} />
    // time to render list :) 
    return (
        !isLoading && 
        <SafeAreaView>
            <View>
                <FlatList 
                    style={{ flexGrow: 0}} 
                    data={myContext.coupons} 
                    renderItem={renderCoupon}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    )
}
