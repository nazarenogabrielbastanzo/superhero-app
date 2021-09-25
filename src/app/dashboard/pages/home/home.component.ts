import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../../services/requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  goodTeam: any = [];
  badTeam: any = [];
  team: any = [];

  constructor(
    private reqServ: RequestsService
  ) { }

  ngOnInit(): void {

    if (this.team.length === 6) {
      console.log('Ok');

    }

    // deleting a hero:
    this.reqServ.eventTrigger.subscribe((data: any) => {
      console.log(data.data);

      if (this.goodTeam.indexOf(data.data) !== -1) this.goodTeam.splice(this.goodTeam.indexOf(data.data), 1);
      if (this.badTeam.indexOf(data.data) !== -1) this.badTeam.splice(this.badTeam.indexOf(data.data), 1);
      if (this.team.indexOf(data.data) !== -1) this.team.splice(this.team.indexOf(data.data), 1);
    });
  }

  getHero(id: number): any {
    this.reqServ.getHero(id)
      .subscribe((resp: any) => {
        console.log(resp);
      });
  }
}
