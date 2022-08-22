import { StyleSheet, Pressable } from "react-native"
import { Link } from "react-router-native"
import Text from "./Text"

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    paddingHorizontal: 10,
  },
})

const AppBarTab = ({ tabName, path }) => (
  <Link to={path}>
    <Text p="1" style={styles.text}>
      {tabName}
    </Text>
  </Link>
)

export default AppBarTab
