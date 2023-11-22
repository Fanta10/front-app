export interface User {
  id:number,
  email:String,
  nom:String,
  prenom:String,
  password:String
}
export interface ISingleUser{
  data: User
}

export interface IDataUser{
  data: User[]
}

export interface ITokenUser{
  id: number,
  nom: string,
  prenom: string,
  email: string,
  iap?: number,
  exp?: number
}
