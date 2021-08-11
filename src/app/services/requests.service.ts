import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor() { }

  getHero(characterId: number): Promise<any> {
    return axios.get(`/api/${environment.accessToken}/${characterId}`);
  }

  searchHero(heroName: string): Promise<any> {
    return axios.get(`/api/${environment.accessToken}/search/${heroName}`);
  }
}
