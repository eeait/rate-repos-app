import { useQuery } from "@apollo/client"
import { FlatList, View, StyleSheet, Platform } from "react-native"
import { GET_REPOSITORIES } from "../graphql/queries"
import useRepositories from "../hooks/useRepositories"
import Item from "./RepoItem"
import Text from "./Text"

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  const { repositories } = useRepositories()

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  const renderItem = ({ item }) => <Item key={item.id} repo={item} />
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  )
}

export default RepositoryList
