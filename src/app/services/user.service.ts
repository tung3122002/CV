import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL: string = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }
  getUser(id: number): Observable<Iuser> {
    return this.http.get<Iuser>(`${this.API_URL}/${id}`)
  }
  getProducts():Observable<Iuser[]> {
    return this.http.get<Iuser[]>(this.API_URL)
  }
  adduser(user: any): Observable<Iuser> {
    return this.http.post<Iuser>(`${this.API_URL}`, user)
  }
  updateuer(user: any): Observable<Iuser> {
    return this.http.put<Iuser>(`${this.API_URL}/${user.id}`, user)
  }
  removeuser(id: any): Observable<Iuser> {
    return this.http.delete<Iuser>(`${this.API_URL}/${id}`)
  }
}
