import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Logiciel } from '../models/logiciel';

@Injectable({
  providedIn: 'root'
})
export class FonctionlogicielService {

  constructor(private httpService : HttpService) { }


  setMat(mat : any) {
    return this.httpService.post({endpoint : '/v1/logiciel',data : mat});
   }

   updateMateriel(materiel : Logiciel ) {
     return this.httpService.put({endpoint : '/v1/logiciel',data : materiel});
   }

   getMateriels() {
    return this.httpService.get("/v1/logiciel");
   }

   deleteMateriel(id : number) {
     return this.httpService.delete(`/v1/logiciel/${id}`);
   }
}
