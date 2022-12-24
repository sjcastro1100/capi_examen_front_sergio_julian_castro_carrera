import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private http: HttpClient) { }

  /**
   * Obtiene los usuarios del api
   * @returns lista de usuarios observable
   */
  getUsers(){
    return this.http.get('http://127.0.0.1:8000/api/users')
  }
}
