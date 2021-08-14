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
  errorMessage: string = '';

  constructor(
    private reqServ: RequestsService,
  ) { }

  ngOnInit(): void {
    // this.reqServ.getHero(561)
    //   .then((response: any) => {
    //     console.log(response);
    //   })
    //   .catch((error: any) => {
    //     console.log(error);
    //   });

    // this.reqServ.getUsers()
    //   .then((response: any) => {
    //     console.log(response);
    //   })
    //   .catch((error: any) => {
    //     console.log(error);
    //   });
  }

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

  logout() {
    this.reqServ.clearStorage();
  }

}
