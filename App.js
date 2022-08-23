import { ApolloProvider } from "@apollo/client"
import { NativeRouter } from "react-router-native"
// eslint-disable-next-line import/no-extraneous-dependencies
import Constants from "expo-constants"
import Main from "./src/components/Main"
import AuthStorage from "./src/utils/authStorage"
import createApolloClient from "./src/utils/apolloClient"
import AuthStorageContext from "./src/contexts/AuthStorageContext"

const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)

const App = () => {
  console.log("Extra:", Constants.manifest.extra)
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  )
}

export default App
