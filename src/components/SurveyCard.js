import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
//image, title, description, amount to earn, number of questions 
/*    title,
    slug,
    category,
    completion_bonus_cents,
    number_of_questions,
    description
}
*/
export default function SurveyCard(
    {item}
) {
    const { item: cardData } = item 
    const {
        title,
        description,
        completion_bonus_cents: completionBonusCents,
        number_of_questions: numberOfQuestions
    } = cardData
    return (
        <Card >
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Title
                title={title}
                titleStyle={{textAlign: 'center'}}
            />
            <Card.Content style={{alignItems: 'center'}}>
                <Paragraph>
                    {description}
                </Paragraph>
                <Paragraph>
                    Earn {completionBonusCents}
                </Paragraph>
                <Paragraph>
                    {numberOfQuestions} Questions
                </Paragraph>
            </Card.Content>
        </Card>
    )
}
