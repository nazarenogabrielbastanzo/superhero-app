import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  @Output() eventTrigger: EventEmitter<any> = new EventEmitter();

  constructor(
    private httpClient: HttpClient,
  ) {
    this.initializeStorage();
  }

  public getHero(characterId: number): Observable<any> {
    return this.httpClient.get(`/api/${environment.apiToken}/${characterId}`);
  }

  public searchHero(heroName: string): Observable<any> {
    return this.httpClient.get(`/api/${environment.apiToken}/search/${heroName}`);
  }

  public login( userEmail: string, userPassword: string ): Observable<any> {
    return this.httpClient.post<any>(environment.accessURL, {email: userEmail, password: userPassword}, httpOptions);
  }

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
