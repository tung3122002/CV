import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproject } from '../models/project';
import { Iuser } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  API_URL: string = 'http://localhost:3000/project';
  constructor(private http: HttpClient) { }
  getUser(id: number): Observable<Iproject> {
    return this.http.get<Iproject>(`${this.API_URL}/${id}`)
  }
  getProducts():Observable<Iproject[]> {
    return this.http.get<Iproject[]>(`${this.API_URL}`)
  }
  adduser(user: any): Observable<Iproject> {
    return this.http.post<Iproject>(`${this.API_URL}`, user)
  }
  updateuer(user: any): Observable<Iproject> {
    return this.http.put<Iproject>(`${this.API_URL}/${user.id}`, user)
  }
  removeuser(id: any): Observable<Iproject> {
    return this.http.delete<Iproject>(`${this.API_URL}/${id}`)
  }
}
