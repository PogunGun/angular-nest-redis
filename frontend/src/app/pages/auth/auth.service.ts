import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {IUser} from "../../inerface";
import {ILOGIN_AUTH, LOGIN_AUTH} from "./gql/login.auth";
import {map, tap} from "rxjs";
import {SIGNUP_AUTH} from "./gql/signup.auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private readonly apollo: Apollo) { }
  login({email,password}:any){
    return this.apollo.mutate<ILOGIN_AUTH>({
      mutation:LOGIN_AUTH,
      variables:{
        loginInput:{
          email,
          password
        }
      }
    }).pipe(tap(this.setToken))
  }
  signup({email,password,name}:any){
    console.log(name)
    console.log(password)
    console.log(email)
    return this.apollo.mutate<SIGNUP_AUTH>({
      mutation:SIGNUP_AUTH,
      variables:{
        createUser:{
          email,
          password,
          name
        }
      }
    }).pipe(tap(this.setToken))
  }
  private setToken(res:any) {
    console.log(res.data.signup.access_token)
    if (res) {
      // const expData = new Date(new Date().getTime() + +res.expiresIn * 1000)
      // localStorage.setItem('firebaseToken', expData.toString())
      localStorage.setItem('token', res.data.signup.access_token)
    } else {
      localStorage.clear()
    }
  }

  get token() {
    // // @ts-ignore
    // const expDate = new Date(localStorage.getItem('firebaseToken'))
    // if (new Date > expDate) {
    //   this.logout()
    //   return null
    // }
    return localStorage.getItem('token')
  }
  logout(){
    this.setToken(null)
  }
  isAuth(){
    return !!this.token
  }
}
