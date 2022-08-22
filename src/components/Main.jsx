import { StyleSheet, View } from "react-native"
import { Navigate, Route, Routes } from "react-router-native"
import RepositoryList from "./RepositoryList"
import AppBar from "./AppBar"
import SignIn from "./SignIn"

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
  },
})

const Main = () => (
  <View style={styles.container}>
    <AppBar />
    <Routes>
      <Route exact path="/" element={<RepositoryList />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route replace path="/" element={<Navigate to="/" />} />
    </Routes>
  </View>
)

export default Main
