import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=UTF-8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private tokenURL = 'http://challenge-react.alkemy.org/';

  @Output() eventTrigger: EventEmitter<any> = new EventEmitter();

  constructor(
    private httpClient: HttpClient,
  ) {
    this.initializeStorage();
  }

  public getHero(characterId: number): Observable<any> {
    return this.httpClient.get(`/api/${environment.accessToken}/${characterId}`);
  }

  public searchHero(heroName: string): Observable<any> {
    return this.httpClient.get(`/api/${environment.accessToken}/search/${heroName}`);
  }

  //
  public login( userEmail: string, userPassword: string ): Observable<any> {
    return this.httpClient.post<any>(this.tokenURL, {email: userEmail, password: userPassword}, httpOptions);
  }
  //

  // public async login(userEmail: string, userPassword: string): Promise<any> {
  //   axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
  //   try {
  //     const response = await axios({
  //       method: 'post',
  //       url: this.tokenURL,
  //       data: {
  //         email: userEmail,
  //         password: userPassword
  //       }
  //     });
  //     console.log(response);
  //     // store token in localStorage
  //     localStorage.setItem(TOKEN, response.data.token);
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Success!',
  //       text: 'Logged In'
  //     });
  //     this.router.navigate(['/home']);
  //   } catch (error) {
  //     console.log(error);
  //     // show alert
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Error!',
  //       text: 'Unauthorized Access',
  //       timer: 5000
  //     });
  //   }
  // }

  private initializeStorage(): void {
    const current = localStorage.getItem('token');
    if (!current) {
      localStorage.setItem('token', '');
    }
  }

  public clearStorage(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.log('Error cleaning localStorage', error);
    }
  }
}
