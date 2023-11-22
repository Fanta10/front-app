import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/logiciel/logiciel/services/http.service';
import { Token } from 'src/app/shared/models/token';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environnement/environnement.dev';

@Injectable({
  providedIn: 'root'
})
export class FonctionLoginService {

   apiUrl = 'http://localhost:8070/auth/generateToken';



  constructor(private http: HttpClient

     ) { }

     login1(credentials: Credential): Observable<Token>{
      return this.http.post<Token>(this.apiUrl, credentials)
    }


    //  login2(loginRequest: any): Observable<any> {
    //   return this.http.post(environment.BASE_URL + "/authenticate", loginRequest)
    // }

    // // hello(): Observable<any> {
    // //   return this.http.get(environment.BASE_URL + '/v1/rex/', {
    // //     headers: this.createAuthorizationHeader()
    // //   });
    // // }

    // private createAuthorizationHeader() {
    //   const jwtToken = localStorage.getItem('JWT');
    //   if (jwtToken) {
    //     return new HttpHeaders().set(
    //       'Authorization', 'Bearer ' + jwtToken
    //     )
    //   } else {
    //     console.log("JWT token not found in the Local Storage");
    //   }
    //   return null;
    // }

    //end


public login(credentials: any): Observable<any> {
console.log('fdf',this.token)
  // Ajoutez les en-têtes d'autorisation si nécessaire
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer your_token_here'
  });

     // Effectuez la requête POST
     return this.http.post(this.apiUrl, credentials, { headers });

   }
   // AuthService (auth.service.ts)

getToken(): string | null {
  return localStorage.getItem('token');
}
token = this.getToken()

// get(endpoint : string ) {
//   return this.http.get(`${environment.BASE_URL}${endpoint}`,{headers : this.httpHeader()});
// }

  //  httpHeaderLogin() {
  //   return new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
  //     'Accept': '*',
  //     'Authorization': 'Bearer Token ',
  //     'mode': 'no-cors'

  //   });
 // }
// tokens= this.getToken();
//  apiUrl = 'http://localhost:8070/v1/environnement';

//  getEnv() : Observable<any>{
//   const headers = new HttpHeaders({
//     'Content-Type': 'application/json',
//      'Authorization': 'Bearer this.tokens'
//   });

//    return this.http.get(this.apiUrl2,{ headers })
//  }
//  httpHeader() {
//   return new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
//     'Accept': '*',
//     'Authorization': 'Bearer  ${token}'
//   });
// }

logout(){
  // Supprimer le token du localStorage
  localStorage.removeItem('token');
}


        // en cas de reinitialisation de mot de pass
}
