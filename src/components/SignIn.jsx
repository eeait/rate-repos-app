import { Formik } from "formik"
import { Pressable, StyleSheet, View } from "react-native"
import * as yup from "yup"
import theme from "../theme"
import FormikTextInput from "./FormikTextInput"
import Text from "./Text"

const initialValues = {
  username: "",
  password: "",
}

const styles = StyleSheet.create({
  stack: {
    flexDirection: "column",
  },
  field: {
    padding: 10,
    borderRadius: 5,
    borderColor: "#a3a3a3",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    marginHorizontal: 10,
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    marginHorizontal: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
})

const SignInForm = ({ onSubmit }) => (
  <View>
    <FormikTextInput
      style={styles.field}
      name="username"
      placeholder="Username"
    />
    <FormikTextInput
      style={styles.field}
      name="password"
      placeholder="Password"
      secureTextEntry
    />
    <Pressable style={styles.button} onPress={onSubmit}>
      <Text style={styles.buttonText}>Sign in</Text>
    </Pressable>
  </View>
)

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
})

const SignIn = () => {
  const onSubmit = () => {
    console.log("Sign In Pressed")
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
