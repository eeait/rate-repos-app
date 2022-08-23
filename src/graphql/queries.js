/* eslint-disable import/prefer-default-export */
import { gql } from "@apollo/client"

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          name
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          ownerAvatarUrl
          description
          id
          language
        }
      }
    }
  }
`
export const ME = gql`
  {
    me {
      id
      username
    }
  }
`
