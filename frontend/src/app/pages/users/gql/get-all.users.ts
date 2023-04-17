import { gql } from 'apollo-angular'
import { IUser } from 'src/app/inerface'
export interface GET_ALL_USERS {
  getAllUsers:IUser[]
}

export const GET_ALL_USERS = gql`
  query getAllUsers{
    getAllUsers{
      name,
      email
      createdAt
      updatedAt
      id

    }
  }
`
