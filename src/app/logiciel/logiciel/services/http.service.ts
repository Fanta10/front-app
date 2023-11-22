import { data } from 'jquery';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environnement/environnement.dev';
import { FonctionLoginService } from 'src/app/Auth/Login/service/fonction-login.service';
import { Observable } from 'rxjs';
import { Environ } from 'src/app/environ/environ/models/environ';


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http : HttpClient, private authService: FonctionLoginService) { }

  token = this.authService.getToken();
//console.log(token)

  get(endpoint : string) {
    //console.log('tokend' + this.token);
    console.log('header' + JSON.stringify(this.httpHeader().getAll('Authorization')))
    console.log('endpoint ' + `${environment.apiUrl}${endpoint}`)
    return this.http.get(`${environment.apiUrl}${endpoint}`);
  }
  // postLogin(endpoint : string ) {
  //   return this.http.post(`${environment.BASE_URL}${endpoint}`, {headers : this.httpHeaderLogin()} );
  // }

  post(parameter : Required<{endpoint : string , data : any}> ) {
    return this.http.post(`${environment.apiUrl}${parameter.endpoint}`,parameter.data, {headers : this.httpHeader()} );
  }

  postFile(parameter : Required<{endpoint : string , data : any}> ) {
    return this.http.post(`${environment.apiUrl}${parameter.endpoint}`,parameter.data, {headers : this.httpHeaderforFile()} );
  }

  put(parameter : Required<{endpoint : string , data : any }>) {
    return this.http.put(`${environment.apiUrl}${parameter.endpoint}`, parameter.data,{headers : this.httpHeader()});
  }

  delete(endpoint : string) {
    return this.http.delete(`${environment.apiUrl}${endpoint}`,{headers : this.httpHeader()});
  }

  getById(endpoint : string)
  {
    return this.http.get(`${environment.apiUrl}${endpoint}`,{headers : this.httpHeader()});
  }

  //  search(keyword : string){
  //   return this.http.get(environment.apiUrl+'/v1/environnement/recherche?keyword='+keyword)
  // }


  httpHeader(){
//console.log('hh'+ this.token)
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
      'Accept': '*/*',
      //'Authorization': 'Bearer ' + this.token
    });

  }

  // httpHeaderLogin() {
  //   return new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
  //     'Accept': '*',
  //       'Authorization': 'Bearer ' + localStorage.getItem('token')

  //   });
 // }


  httpHeaderforFile() {
    return new HttpHeaders({
      //'Content-Type': 'undefined',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
      'Accept': '*/*',
      'Authorization': 'Bearer ' + this.token
    });
  }


}
