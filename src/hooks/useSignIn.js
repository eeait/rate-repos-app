import { useApolloClient, useMutation } from "@apollo/client"
import { SIGN_IN } from "../graphql/mutations"
import useAuthStorage from "./useAuthStorage"

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const [mutate, result] = useMutation(SIGN_IN)

  const signIn = async ({ username, password }) => {
    const data = await mutate({
      variables: { credentials: { username, password } },
    })
    const token = data.data.authenticate.accessToken
    console.log("HOOK token", token)
    authStorage.setAccessToken(token)
    apolloClient.resetStore()
    return data
  }

  return [signIn, result]
}

export default useSignIn
