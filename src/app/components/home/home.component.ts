import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  goodTeam: any = [];
  badTeam: any = [];
<<<<<<< HEAD
=======
  team: any = [];
>>>>>>> 19agosto2021

  constructor(
    private reqServ: RequestsService
  ) { }

  ngOnInit(): void {
    for (let i = 1; i <= 6; i++) {
      this.getHero(i);
    }

    this.reqServ.eventTrigger.subscribe((data: any) => {
      console.log(data.data);

      if (this.goodTeam.indexOf(data.data) !== -1) this.goodTeam.splice(this.goodTeam.indexOf(data.data), 1);
      if (this.badTeam.indexOf(data.data) !== -1) this.badTeam.splice(this.badTeam.indexOf(data.data), 1);
      if (this.team.indexOf(data.data) !== -1) this.team.splice(this.team.indexOf(data.data), 1);
    });
  }

  getHero(id: number): any {
    this.reqServ.getHero(id)
      .then((hero: any) => {
        console.log(hero);
        if (hero.data.biography.alignment === 'good') {
          this.goodTeam.push(hero);
          this.team.push(hero);
        }
        if (hero.data.biography.alignment === 'bad') {
          this.badTeam.push(hero);
          this.team.push(hero);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
