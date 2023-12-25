import { View, StyleSheet, ScrollView } from "react-native"
// eslint-disable-next-line import/no-extraneous-dependencies
import Constants from "expo-constants"
import { useApolloClient, useQuery } from "@apollo/client"
import theme from "../theme"
import AppBarTab from "./AppBarTab"
import { ME } from "../graphql/queries"
import useAuthStorage from "../hooks/useAuthStorage"

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 15,
    paddingLeft: 10,
    backgroundColor: theme.colors.appBarBackground,
  },
  text: {
    color: "#ffffff",
  },
})

const AppBar = () => {
  const { loading, error, data } = useQuery(ME)
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()

  const signOut = () => {
    console.log("Signing out")
    authStorage.removeAccessToken()
    apolloClient.resetStore()
  }
  // console.log(data)
  return (
    <View style={styles.container}>
      {/* <Text>{data}</Text> */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AppBarTab tabName="Repositories" path="/" />
        <AppBarTab tabName="Sign in" path="/signin" />
        {data.me && (
          <AppBarTab tabName="Sign out" onPress={signOut} />
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
