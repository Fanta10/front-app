import { Injectable } from '@angular/core';

import { Rex } from '../models/rex';
import { HttpService } from '../../../logiciel/logiciel/services/http.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environnement.dev';


@Injectable({
  providedIn: 'root'
})
export class FonctionRexService {

  constructor(private httpService : HttpService, private http: HttpClient) { }

  public getAccount(page : number, criteriasearch : string):Observable<Rex>{
    return this.http.get<Rex>(environment.apiUrl+"/v1/rex");
  }

  setMat(mat : any) {
    return this.httpService.post({endpoint : '/v1/rex',data : mat});
   }

   updateMateriel(materiel : Rex) {
     return this.httpService.put({endpoint : `/v1/rex`,data : materiel});
   }

   getMateriels() {
    return this.httpService.get('/v1/rex');
   }

  //  deleteMateriel(idRex : number) {
  //    return this.httpService.delete(`v1/rex/${idRex}`);
  //  }
   deleteMateriel(id : number) {
    return this.httpService.delete(`/v1/rex/${id}`);
  }
   getByRexId(idRex: number) {
    return this.httpService.get('v1/rex/' + idRex);
  }


  getPaginatedData(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get(`${environment.apiUrl}/v1/rex`, { params });
  }
}
