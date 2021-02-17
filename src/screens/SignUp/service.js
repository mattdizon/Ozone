import axios from 'axios'
import { BASE_URL, SIGNUP } from '../../utils/helpers/constants'
import { createTwoButtonAlert } from '../../components/Alert/Alert'

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

    } catch (error) {
      createTwoButtonAlert({
        title: "Error Signing Up"
      })
    }
}