import { gql } from 'apollo-angular'
import { IUser } from 'src/app/inerface'
export interface ILOGIN_AUTH {
  updateUser: IUser
}

export const LOGIN_AUTH = gql`
  mutation login($loginInput:LoginInput!){
    login(login:$loginInput){
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
