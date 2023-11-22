import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataUser, ISingleUser } from '../Auth/Login/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8070/users'

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IDataUser>{
    return this.http.get<IDataUser>(this.url)
  }

  getUser(uid: string | null): Observable<ISingleUser>{
    return this.http.get<ISingleUser>(this.url+'/'+uid)
  }
}
