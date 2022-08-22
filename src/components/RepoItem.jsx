import { Image, StyleSheet, View } from "react-native"
import theme from "../theme"
import Text from "./Text"

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#ffffff",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginRight: 60,
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  detail: {
    // borderStyle: "solid",
    // borderWidth: 2,
    padding: 5,
    paddingTop: 0,
  },
  textRow: {
    textAlign: "center",
    paddingBottom: 2,
  },
  stack: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  border: {
    borderColor: "#000000",
    borderWidth: 1,
  },
  languageBox: {
    padding: 5,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
  },
})

const Language = ({ language }) => {
  console.log()
  return (
    <View style={styles.languageBox}>
      <Text style={{ color: "#ffffff" }}>{language}</Text>
    </View>
  )
}

const InfoBox = ({ url, fullName, description, language }) => {
  console.log()
  return (
    <View style={styles.infoContainer}>
      <Image
        style={styles.avatar}
        source={{
          uri: url,
        }}
      />
      <View style={styles.stack}>
        <Text p="2" style={{ marginBottom: 5 }}>
          {fullName}
        </Text>
        <Text style={{ marginBottom: 5 }}>{description}</Text>
        <Language language={language} />
      </View>
    </View>
  )
}

const round = (number) => {
  if (number <= 1000) return number
  return `${(number / 1000).toFixed(1)}k`
}

const Detail = ({ number, text }) => {
  console.log()
  return (
    <View style={styles.detail}>
      <Text p="2" style={styles.textRow}>
        {round(number)}
      </Text>
      <Text style={styles.textRow}>{text}</Text>
    </View>
  )
}

const DetailBar = ({ stars, forks, reviews, rating }) => {
  console.log()
  return (
    <View style={styles.flexContainer}>
      <Detail number={stars} text="stars" />
      <Detail number={forks} text="forks" />
      <Detail number={reviews} text="reviews" />
      <Detail number={rating} text="rating" />
    </View>
  )
}

const Item = ({ repo }) => (
  <View style={styles.container}>
    <InfoBox
      url={repo.ownerAvatarUrl}
      fullName={repo.fullName}
      description={repo.description}
      language={repo.language}
    />
    <DetailBar
      stars={repo.stargazersCount}
      forks={repo.forksCount}
      reviews={repo.reviewCount}
      rating={repo.ratingAverage}
    />
  </View>
)

export default Item
