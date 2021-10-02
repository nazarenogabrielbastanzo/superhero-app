import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../../services/requests.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  goodTeam: Hero[] = [];
  badTeam: Hero[] = [];
  team: Hero[] = [];

  constructor(
    private reqServ: RequestsService
  ) { }

  ngOnInit(): void {

    const team = localStorage.getItem('team');
    const goodTeam = localStorage.getItem('goodTeam');
    const badTeam = localStorage.getItem('badTeam');

    if (team) {
      this.team = JSON.parse(team);
    }
    if (goodTeam) {
      this.goodTeam = JSON.parse(goodTeam);
    }
    if (badTeam) {
      this.badTeam = JSON.parse(badTeam);
    }

    if (this.team.length === 6) {
      console.log('Ok');

    }

    // deleting a hero:
    this.reqServ.eventTrigger.subscribe((data: any) => {
      console.log(data.data);

      if (this.team.indexOf(data.data) !== -1) {
        this.team.splice(this.team.indexOf(data.data), 1);
        localStorage.setItem('team', JSON.stringify(this.team));
      }
      if (this.goodTeam.indexOf(data.data) !== -1) {
        this.goodTeam.splice(this.goodTeam.indexOf(data.data), 1);
        localStorage.setItem('goodTeam', JSON.stringify(this.goodTeam));
      }
      if (this.badTeam.indexOf(data.data) !== -1) {
        this.badTeam.splice(this.badTeam.indexOf(data.data), 1);
        localStorage.setItem('badTeam', JSON.stringify(this.badTeam));
      }
    });
  }
}
