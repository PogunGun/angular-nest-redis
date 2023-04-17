import { gql } from 'apollo-angular'
import { IUser } from 'src/app/inerface'
export interface SIGNUP_AUTH {
  updateUser: IUser
}

export const SIGNUP_AUTH = gql`
  mutation signUp($createUser:CreateUserInput!){
    signup(createUserDto:$createUser){
      access_token,
      user{
        id
        email
        name
        createdAt
        updatedAt
      }
    }
  }
`
