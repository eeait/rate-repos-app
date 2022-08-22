import { Text as NativeText, StyleSheet } from "react-native"

import theme from "../theme"

const styles = StyleSheet.create({
  text1: {
    color: theme.colors.color1,
    fontSize: theme.fontSizes.font1,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
  },
  text2: {
    color: theme.colors.color2,
    fontSize: theme.fontSizes.font2,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
  },
  text3: {
    color: theme.colors.color3,
    fontSize: theme.fontSizes.font3,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
})

const Text = ({ p, style, ...props }) => {
  const textStyle = [
    styles.text3,
    p === "2" && styles.text2,
    p === "1" && styles.text1,
    style,
  ]

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <NativeText style={textStyle} {...props} />
}

export default Text
