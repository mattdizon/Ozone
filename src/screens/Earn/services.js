import axios from 'axios'
import { BASE_URL, SURVEYS  } from '../../utils/helpers/constants'
export const getSurveys = async (accessToken, client, uid) => {
    let data
    try {
      await fetch(`${BASE_URL}/${SURVEYS}`, {
        method: 'GET',
        headers: {
          'client' : client,
          'access-token': accessToken,
          'uid': uid
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
    .then(resp => data = resp.json())
    const completedSurveys = data["_W"]["completed_surveys"]
    const incompleteSurveys  = data["_W"]["incomplete_surveys"]
      return{
        completedSurveys: completedSurveys,
        incompleteSurveys: incompleteSurveys
      }
    } catch (error) {
      console.log('error authenticating')
    }
}