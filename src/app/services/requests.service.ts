import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private tokenURL = 'http://challenge-react.alkemy.org/';

  @Output() eventTrigger: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router
  ) {
    this.initializeStorage();
  }

  public getHero(characterId: number): Promise<any> {
    return axios.get(`/api/${environment.accessToken}/${characterId}`);
  }

  public searchHero(heroName: string): Promise<any> {
    return axios.get(`/api/${environment.accessToken}/search/${heroName}`);
  }

  public async login(userEmail: string, userPassword: string): Promise<any> {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
    try {
      const response = await axios({
        method: 'post',
        url: this.tokenURL,
        data: {
          email: userEmail,
          password: userPassword
        }
      });
      console.log(response);
      // store token in localStorage
      localStorage.setItem(TOKEN, response.data.token);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Logged In'
      });
      this.router.navigate(['/home']);
    } catch (error) {
      console.log(error);
      // show alert
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Unauthorized Access',
        timer: 5000
      });
    }
  }

  private initializeStorage(): void {
    const current = localStorage.getItem(TOKEN);
    if (!current) {
      localStorage.setItem(TOKEN, '');
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
