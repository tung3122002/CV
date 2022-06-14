import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipost } from '../models/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL: string = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }
  getpost(id: number): Observable<Ipost> {
    return this.http.get<Ipost>(`${this.API_URL}/${id}`)
  }
  getposts():Observable<Ipost[]> {
    return this.http.get<Ipost[]>(this.API_URL)
  }
  adduser(user: any): Observable<Ipost> {
    return this.http.post<Ipost>(`${this.API_URL}`, user)
  }
  updateuer(user: any): Observable<Ipost> {
    return this.http.put<Ipost>(`${this.API_URL}/${user.id}`, user)
  }
  removeuser(id: any): Observable<Ipost> {
    return this.http.delete<Ipost>(`${this.API_URL}/${id}`)
  }
}
