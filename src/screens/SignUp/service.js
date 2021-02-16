import axios from 'axios'
import { BASE_URL, SIGNUP } from '../../utils/helpers/constants'

export const signUp = async ( email, password ) => {
    let data
    try {
      await axios({
        method: 'post',
        url: `${BASE_URL}/${SIGNUP}`,
        data: {
          email:email,
          password: password
        }
      })
    .then(resp => data = resp)
    const  accessToken = data.headers["access-token"]
    const client = data.headers["client"]

    } catch (error) {
      console.log('error signing in')
    }
}