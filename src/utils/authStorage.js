import AsyncStorage from "@react-native-async-storage/async-storage"

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace
  }

  getAccessToken() {
    const token = AsyncStorage.getItem(`${this.namespace}:token`)
    return token
  }

  setAccessToken(token) {
    AsyncStorage.setItem(`${this.namespace}:token`, token)
  }

  removeAccessToken() {
    AsyncStorage.removeItem(`${this.namespace}:token`)
  }
}

export default AuthStorage
