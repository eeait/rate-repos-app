import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bye, world</Text>
      <StatusBar style="auto" />
    </View>
  )
}
