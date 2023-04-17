import { Injectable } from '@angular/core';
import {SIGNUP_AUTH} from "../auth/gql/signup.auth";
import {map, Observable, tap} from "rxjs";
import {Apollo} from "apollo-angular";
import {GET_ALL_USERS} from "./gql/get-all.users";
import { IUser } from 'src/app/inerface';
import { DELETE_USER, IDELETE_USER } from './gql/delete-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public readonly apollo:Apollo) { }
  getAllUsers(): Observable<IUser[]>{
    return this.apollo.query<GET_ALL_USERS>({
      query:GET_ALL_USERS,
    }).pipe(map(({data})=>data.getAllUsers))
  }
  deleteUser(id: number): Observable<number | undefined> {
    return this.apollo.mutate<IDELETE_USER>({
      mutation: DELETE_USER,
      variables: {
        id: +id,
      },
      refetchQueries:['getAllUsers']
    }).pipe(map(({ data }) => data?.removeUser))
  }
}
