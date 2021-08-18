import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  // usersURL = 'https://my-json-server.typicode.com/nazarenogabrielbastanzo/superhero-app/users';

  tokenURL = 'http://challenge-react.alkemy.org/';

  constructor(
    private router: Router
  ) {
    this.initializeStorage();
  }

  getHero(characterId: number): Promise<any> {
    return axios.get(`/api/${environment.accessToken}/${characterId}`);
  }

  searchHero(heroName: string): Promise<any> {
    return axios.get(`/api/${environment.accessToken}/search/${heroName}`);
  }

  // getUsers(): Promise<any> {
  //   return axios.get(this.usersURL);
  // }

  // getUser(userId: number): Promise<any> {
  //   return axios.get(`${this.usersURL}/${userId}`);
  // }

  // axios.post(url[, data[, config]])
  login(userEmail: string, userPassword: string): Promise<any> {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
    return axios({
      method: 'post',
      url: this.tokenURL,
      data: {
        email: userEmail,
        password: userPassword
      }
    })
    .then((response: any) => {
      console.log(response);
      // store token in localStorage
      localStorage.setItem(TOKEN, response.data.token);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Logged In'
      });
      this.router.navigate(['/home']);
    })
    .catch((error: any) => {
      console.log(error);
      // show alert
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Unauthorized Access'
      });
    });
  }

  private initializeStorage(): void {
    const current = localStorage.getItem(TOKEN);
    if (!current) {
      localStorage.setItem(TOKEN, '');
    }
  }

  clearStorage(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.log('Error cleaning localStorage', error);
    }
  }
}
