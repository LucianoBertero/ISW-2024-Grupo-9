import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ResendService {

  // resend = new Resend('re_JrUFwjXS_DE6ma4ww62YDx4YVHH9Upv37');
  apiUrl = 'https://api.resend.com/emails';
  accessToken = 're_JrUFwjXS_DE6ma4ww62YDx4YVHH9Upv37';
  constructor(private http: HttpClient) { }

  send() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.accessToken,
      'Content-Type': 'application/json'
    });

    const emailData = {
      from: 'onboarding@resend.dev',
      to: 'martin30016@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    };

    return this.http.post(this.apiUrl, emailData, { headers });
  }
}
