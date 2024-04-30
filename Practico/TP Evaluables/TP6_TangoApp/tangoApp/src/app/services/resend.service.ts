import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResendService {
  errorTarget: boolean = false;

  constructor(private http: HttpClient) {}

  send() {
    return this.http.get(`http://localhost:3001`);
  }
}
