import { Component, Input, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [RequestsService]
})
export class SearchComponent implements OnInit {

  characterResults: any[] = [];
  heroName: string = '';
  errorMessage: string = '';
  response: any;

  @Input() team: any;
  @Input() goodTeam: any;
  @Input() badTeam: any;
  constructor(
    private reqServ: RequestsService
  ) { }

  ngOnInit(): void { }

  searchCharacter(event: any, characterName: string) {
    event.preventDefault();
    this.characterResults = [];
    this.reqServ.searchHero(characterName.trim())
      .then((response: any) => {
        console.log(response);
        if (response.data.response === 'success') {
          for (let result of response.data.results) {
            this.characterResults.push(result);
          };
        }
        if (response.data.response === 'error') {
          console.log(response.data.error);
          this.errorMessage = response.data.error;
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  cleanResults() {
    this.characterResults = [];
    this.heroName = '';
    this.errorMessage = '';
  }

  addCharacter(character: any) {
    console.log(character);

    this.reqServ.getHero(character.id)
      .then((response: any) => {
        console.log(response);

        if (response.data.biography.alignment === 'good') this.goodTeam.push(response);
        if (response.data.biography.alignment === 'bad') this.badTeam.push(response);
        this.team.push(response);
      })
      .catch((error: any) => {
        console.log(error);

      });
    this.cleanResults();
  }
}
