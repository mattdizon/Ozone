import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
/* 
company_name: "Adorama"
created_at: "2020-12-17T17:00:59.735Z"
description: "Shop now to save on your favorite Apple products! | view in a browser ADORAMA - More than a camera store New Photo Video Audio Computing Deals Main Banner subheader MacBooks iPads AirPods Apple Watch"
id: 1
logo_src: "https://link.adorama.com/img/5d44430e24c17c505f6890e8dcb29.4yf7/4dc1f989.gif"
name: "Adorama - 30% OFF"
promo_text: "30% OFF"
target_url: "https://adorama.com"
updated_at: "2020-12-17T17:00:59.735Z" 
}
*/
export default function Coupon(
    {item}
) {
    const { item: cardData } = item 
    const {
        company_name: couponName,
        description,
        name, 
        logo_src: logo,
        promo_text: promo,
    } = cardData
    return (
        <Card >
            <Card.Cover source={{ uri: logo }} />
            <Card.Title
                title={name}
                titleStyle={{textAlign: 'center'}}
            />
            <Card.Content style={{alignItems: 'center'}}>
                <Paragraph>
                    { couponName }
                </Paragraph>
                <Paragraph>
                    { promo }
                </Paragraph>
                <Paragraph>
                    {description}
                </Paragraph>
            </Card.Content>
        </Card>
    )
}
