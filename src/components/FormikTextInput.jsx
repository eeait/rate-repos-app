import { StyleSheet } from "react-native"
import { useField } from "formik"
import TextInput from "./TextInput"
import Text from "./Text"
import theme from "../theme"

const styles = StyleSheet.create({
  errorText: {
    paddingVertical: 5,
    paddingLeft: 10,
    color: theme.colors.error,
  },
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      {showError && (
        <Text style={styles.errorText}>{meta.error}</Text>
      )}
    </>
  )
}

export default FormikTextInput
