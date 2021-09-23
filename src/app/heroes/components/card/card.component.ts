import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../../../services/requests.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() incomingData: any;

  constructor(
    private router: Router,
    private reqServ: RequestsService
  ) { }

  ngOnInit(): void {
    console.log(this.incomingData);
  }

  seeDetails(id: number) {
    this.router.navigate(['/heroes/details', id]);
  }

  deleteHero(hero: any) {
    console.log(hero);
    this.reqServ.eventTrigger.emit({
      data: hero
    });
  }

}
