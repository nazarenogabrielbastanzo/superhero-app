import { Component, Input, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
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

        if (response.data.biography.alignment === 'good' && this.goodTeam.length < 3) {
          this.goodTeam.push(response);
          this.team.push(response);
        } else if (response.data.biography.alignment === 'bad' && this.badTeam.length < 3) {
          this.badTeam.push(response);
          this.team.push(response);
        } else if (response.data.biography.alignment === 'neutral') {
          Swal.fire({
            icon: 'warning',
            title: 'Warning!',
            text: 'Only good and/or bad members are allowed',
            timer: 5000
          });
        } else {
          Swal.fire({
            icon: 'warning',
            title: 'Warning!',
            text: 'Only 3 members per alignment are allowed',
            timer: 5000
          });
        }

        if (this.team.length === 6) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Team complete',
            timer: 5000
          })
        }
      })
      .catch((error: any) => {
        console.log(error);

      });
    this.cleanResults();
  }
}
