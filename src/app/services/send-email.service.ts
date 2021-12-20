import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public _http: HttpClient) { }
  SendEmail(requestObj: any): any {
    return this._http.post('http://51.124.209.121:5000/send_email', requestObj,this.httpOptions);
  }
}
