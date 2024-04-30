import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResendService {
  // resend = new Resend('re_JrUFwjXS_DE6ma4ww62YDx4YVHH9Upv37');

  constructor(private http: HttpClient) {}

  send() {
    return this.http.get(`http://localhost:3000`);
  }
}
