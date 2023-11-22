import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/logiciel/logiciel/services/http.service';
import { Environ } from '../models/environ';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environnement.dev';
import { FonctionLoginService } from 'src/app/Auth/Login/service/fonction-login.service';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class FonctionenvironService {
  apiUrl = 'http://localhost:8070/v1/environnement';


  constructor(private httpService : HttpService, private http:HttpClient, private auth:FonctionLoginService) { }

 // token = this.auth.getToken();
//   getEnv() : Observable<any>{
//    //let token = this.auth.getToken()
// console.log('fanta'+ this.token)
// console.log('head'+ JSON.stringify(this.httpHeader()))
//     return this.http.get(this.apiUrl,{headers : this.httpHeader()})
//   }

  // public getCustomers(){
  //   //console.log("environ" , this.http.get(environment.BASE_URL+"/v1/environnement",{headers : this.httpHeader()}))
  //   console.log('fanta '+ this.token)
  //   console.log('data' + this.httpService.get("/v1/environnement"))
  //   return this.http.get(environment.BASE_URL+"/v1/environnement",{headers : this.httpHeader()})
  // }

  setMat(mat : any) {
    return this.httpService.post({endpoint : '/v1/environnement',data : mat});
   }

   updateMateriel(materiel : Environ) {
     return this.httpService.put({endpoint : '/v1/environnement',data : materiel});
   }

   getMateriels(){
    //console.log("fanta "  +  this.token)
    //console.log("head "+  this.httpHeader())
    //console.log('data' + this.httpService.get("/v1/environnement"))
    return this.httpService.get('/v1/environnement');
   }

   deleteMateriel(id : number) {
     return this.httpService.delete(`/v1/environnement/${id}`);
   }
  //  httpHeader() {
  //   return new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
  //     'Accept': '*/*',
  //     'Authorization': 'Bearer ' +  this.token
  //   });
  }



