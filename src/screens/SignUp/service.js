import axios from 'axios'
import { BASE_URL, SIGNUP } from '../../utils/helpers/constants'
import { createTwoButtonAlert } from '../../components/Alert/Alert'

export const signUpAction = async ( email, password ) => {

  let result
  try {
    await axios({
      method: 'post',
      url: `${BASE_URL}/${SIGNUP}`,
      data: {
        email:email,
        password: password
      }
    })
  .then(resp => result = resp)
  const  accessToken = result.data["access_token"]
  const client = result.data["client"]
  const uid = result.data["uid"]
  const me = result.data["user"]
    return {
      accessToken: accessToken,
      client: client,
      uid: uid,
      me: me
    }
  } catch (error) {
    return (
      createTwoButtonAlert({
        title: "Error Signing In"
      })
   )
  }
}