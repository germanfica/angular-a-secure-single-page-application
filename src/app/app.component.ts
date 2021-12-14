import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-security';
  greeting: any = {};

  constructor(private http: HttpClient) {
    const headers = new HttpHeaders(environment.credentials ? {
      authorization: 'Basic ' + btoa(
        environment.credentials.username + ':' + environment.credentials.password
      )
    } : {});

    http.get<any>(environment.resource_api, { headers: headers }).subscribe(data => this.greeting = data);

  }
}
