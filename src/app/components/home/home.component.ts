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

  constructor(
    private reqServ: RequestsService
  ) { }

  ngOnInit(): void {
    for (let i = 1; i <= 731; i++) {
      if (i <= 6) {
        this.getHero(i);
      } else {
        break;
      }
    }
  }

  getHero(id: number): any {
    this.reqServ.getHero(id)
      .then((hero: any) => {
        console.log(hero);
        if (hero.data.biography.alignment === 'good') this.goodTeam.push(hero);
        if (hero.data.biography.alignment === 'bad') this.badTeam.push(hero);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
