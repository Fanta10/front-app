import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FonctionrexService {

  constructor(private httpService : HttpService) { }

  getRex() {
    return this.httpService.get("/v1/rex");
   }
}
