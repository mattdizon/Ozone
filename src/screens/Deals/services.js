import { BASE_URL, COUPONS  } from '../../utils/helpers/constants'
export const getDeals = async (accessToken, client, uid) => {
    let data
    try {
      await fetch(`${BASE_URL}/${COUPONS}`, {
        method: 'GET',
        headers: {
          'client' : client,
          'access-token': accessToken,
          'uid': uid
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
    .then(resp => data = resp.json())
    const coupons = data["_W"]
    return coupons
    } catch (error) {
      console.log('error authenticating')
    }
}