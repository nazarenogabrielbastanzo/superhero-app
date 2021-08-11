import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RequestsService]
})
export class HomeComponent implements OnInit {

  characterResults: any[] = [];
  heroName: string = '';

  constructor(
    private reqServ: RequestsService
  ) { }

  ngOnInit(): void {
    this.reqServ.getHero(561)
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  searchCharacter(event: any, characterName: string) {
    event.preventDefault();
    this.characterResults = [];
    this.reqServ.searchHero(characterName)
      .then((response: any) => {
        console.log(response);
        for (let result of response.data.results) {
          this.characterResults.push(result);
        };
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

}
