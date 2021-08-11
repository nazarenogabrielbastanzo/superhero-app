import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  api: string = 'https://superheroapi.com/api';

  constructor() { }

  connect(): any {
    axios.get(`${this.api}/${environment.accessToken}`)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  // 'https://superheroapi.com/api/access-token/character-id'

  getHeroe(): any {
    axios.get(`${this.api}/${environment.accessToken}/1`);
  }
}
