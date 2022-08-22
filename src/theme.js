import { Platform } from "react-native"

const theme = {
  colors: {
    color1: "#000000",
    color2: "#65a87d",
    color3: "#303030",
    primary: "#0366d6",
    appBarBackground: "#24292e",
    error: "#c44949",
  },
  fontSizes: {
    font1: 20,
    font2: 17,
    font3: 14,
  },
  fonts: {
    main: Platform.select({
      ios: "Arial",
      android: "Roboto",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
}

export default theme
