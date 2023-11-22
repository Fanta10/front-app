import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/logiciel/logiciel/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class FonctionresolutionService {

  constructor(private httpService : HttpService) { }

  getResolution() {
    return this.httpService.get("v1/resolution");
   }
}
