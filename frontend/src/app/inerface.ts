export interface IMenu{
  id:number,
  title:string,
  href:string,
  icon?:string
}
export interface  IUser{
  id:number,
  name:string,
  email:string,
  password:string,
  createdAt:Date,
  updatedAt:Date,
}
