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

          if (this.team.length === 0) {
            // The array is empty:
            this.checkCharacter(resp);
          } else if (this.team.find((elem: any) => elem?.id === resp.id)) {
            // The array is not empty, but a duplicate is detected:
            Swal.fire({
              icon: 'warning',
              title: 'Warning!',
              text: 'Repeating characters are not allowed',
              timer: 5000
            });
          } else {
            // The array is not empty, but there are no duplicates:
            this.checkCharacter(resp);
          }
        });

      this.cleanResults();
  }

  checkCharacter(resp: any) {
    if (resp.biography.alignment === 'good' && this.goodTeam.length < 3) {
      this.goodTeam.push(resp);
      this.team.push(resp);
      this.confirmAddition(resp.name);
    } else if (resp.biography.alignment === 'bad' && this.badTeam.length < 3) {
      this.badTeam.push(resp);
      this.team.push(resp);
      this.confirmAddition(resp.name);
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

    if (this.team.length >= 6) {
      Swal.fire({
        icon: 'info',
        title: 'Complete',
        text: 'Team complete!',
        timer: 5000
      });
    }

    console.log(this.goodTeam);
    console.log(this.badTeam);
    console.log(this.team);

    localStorage.setItem('goodTeam', JSON.stringify(this.goodTeam));
    localStorage.setItem('badTeam', JSON.stringify(this.badTeam));
    localStorage.setItem('team', JSON.stringify(this.team));

  }

  confirmAddition(name: string): void {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: `${name} added successfully!`,
      timer: 5000
    });
  }
}
