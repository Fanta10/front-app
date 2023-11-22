import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/logiciel/logiciel/services/http.service';
import { Incident } from '../models/incident';

@Injectable({
  providedIn: 'root'
})
export class FonctionincidentService {

  constructor(private httpService : HttpService) { }

  getIncident() {
    return this.httpService.get('/v1/incident');
   }
   setMat(mat : any) {
    return this.httpService.postFile({endpoint : '/v1/incident',data : mat});
   }

   updateMateriel(materiel : Incident) {
     return this.httpService.put({endpoint : '/v1/incident',data : materiel});
   }

  find(id: number) {
    return this.httpService.get(`/v1/incident/${id}` );
   }

   deleteMateriel(id : number) {
     return this.httpService.delete(`/v1/incident/${id}`);
   }
}
