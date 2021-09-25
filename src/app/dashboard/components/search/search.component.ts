import { Component, Input, OnInit } from '@angular/core';
import { RequestsService } from '../../../services/requests.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  characterResults: any[] = [];
  errorMessage: string = '';
  response: any;

  myForm = new FormGroup({
    heroName: new FormControl('', [
      Validators.minLength(4),
      Validators.required
    ])
  });

  @Input() team: any;
  @Input() goodTeam: any;
  @Input() badTeam: any;
  constructor(
    private reqServ: RequestsService
  ) { }

  ngOnInit(): void { }

  searchCharacter(event: any) {
    event.preventDefault();
    this.characterResults = [];
    this.reqServ.searchHero(this.myForm.value.heroName.trim())
      .subscribe((resp: any) => {
        console.log(resp);

        if (resp.response === 'success') {
          for (let result of resp.results) {
            this.characterResults.push(result);
          };
        }
        if (resp.response === 'error') {
          console.log(resp.error);
          this.errorMessage = resp.error;
        }
      });

      this.myForm.reset();
  }

  cleanResults() {
    this.characterResults = [];
    this.myForm.reset();
    this.errorMessage = '';
  }

  addCharacter(character: any) {
    console.log(character);

    this.reqServ.getHero(character.id)
      .subscribe((resp: any) => {
        console.log(resp);

        if (resp.biography.alignment === 'good' && this.goodTeam.length < 3) {
          this.goodTeam.push(resp);
          this.team.push(resp);
        } else if (resp.biography.alignment === 'bad' && this.badTeam.length < 3) {
          this.badTeam.push(resp);
          this.team.push(resp);
        } else if (resp.biography.alignment === 'neutral') {
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
      });

    this.cleanResults();
  }
}
