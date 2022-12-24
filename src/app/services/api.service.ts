import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('http://127.0.0.1:8000/api/users')
  }
}
