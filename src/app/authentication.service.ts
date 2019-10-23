import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient, private router: Router) { }

  public login(username: string, password: string) {
    const body = {
      email: username,
      password: password,
    };
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    this.http.post(this.baseUrl + '/api/staff/login', body, { headers, observe: 'response' }).subscribe(
      (data) => {
        if (data.body['token']) {
          localStorage.setItem('token', data.body['token']);
          this.router.navigate(['sessionconsult']);
        }
      }
    );
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
  setToken(arg0: any): any {
    throw new Error('Method not implemented.');
  }
}


// .subscribe(
//   res => {
//     if (res.body) {
//       console.log(res.body['token']);
//       this.authService.setToken(res.body['token']);
//       const helper = new JwtHelperService();
//       const decodedToken = helper.decodeToken(this.authService.getToken());
//       console.log(decodedToken.sub);
//       console.log(JSON.parse(decodedToken.sub));
//       this.authService.setUser(decodedToken);
//       this.router.navigate(['/home']);
//     }
//   },
//   error => {
//     if (error.status === 401) {
//       this.badCredentiels = true;
//     } else if (error.status === 403) {
//       this.badCredentiels = false;
//     }
//   },
// );
