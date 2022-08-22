import {
  StyleSheet,
  TextInput as NativeTextInput,
} from "react-native"
import theme from "../theme"

const styles = StyleSheet.create({
  errorField: {
    color: "#000000",
    borderColor: theme.colors.error,
  },
})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style]
  const appliedStyle = error
    ? textInputStyle.concat(styles.errorField)
    : textInputStyle

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <NativeTextInput style={appliedStyle} {...props} />
}

export default TextInput
