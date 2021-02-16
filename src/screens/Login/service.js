import axios from 'axios'
import { BASE_URL, LOGIN  } from '../../utils/helpers/constants'
export const signInAction = async ( email, password ) => {
    let result
    try {
      await axios({
        method: 'post',
        url: `${BASE_URL}/${LOGIN}`,
        data: {
          email:email,
          password: password
        }
      })
    .then(resp => result = resp)
    const  accessToken = result.headers["access-token"]
    const client = result.headers["client"]
    const me = result.data.data
      return {
        accessToken: accessToken,
        client: client,
        me: me
      }
    } catch (error) {
      console.log('error signing in..')
    }
}