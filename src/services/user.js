import { urlFetch } from '../constants'

export const getUser = async (user) => {
  const res = await fetch(`${urlFetch}${user}`)
  const userData = await res.json()
  return userData
}