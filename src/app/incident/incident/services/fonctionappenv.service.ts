import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/logiciel/logiciel/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class FonctionappenvService {

  constructor(private httpService : HttpService) { }

  getAppEnv() {
    return this.httpService.get("v1/envapp");
   }
}
