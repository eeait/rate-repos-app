import { View, StyleSheet, ScrollView } from "react-native"
// eslint-disable-next-line import/no-extraneous-dependencies
import Constants from "expo-constants"
import theme from "../theme"
import AppBarTab from "./AppBarTab"

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

const AppBar = () => (
  <View style={styles.container}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <AppBarTab tabName="Repositories" path="/" />
      <AppBarTab tabName="Sign in" path="/signin" />
    </ScrollView>
  </View>
)

export default AppBar
