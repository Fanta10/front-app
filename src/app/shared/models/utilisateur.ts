export class Utilisateur{
  id!:number;
  email!:String;
  nom!:String;
  prenom!:String;
  password!:String;



  deserialize(input: any): Utilisateur {
    Object.assign(this, input);
    return this;
  }
}
