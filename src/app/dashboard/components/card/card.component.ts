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
<<<<<<< HEAD:src/app/heroes/components/card/card.component.ts
    this.router.navigate(['/heroes/details', id]);
=======
    this.router.navigate(['/dashboard/details', id]);
>>>>>>> 22sep2021_2:src/app/dashboard/components/card/card.component.ts
  }

  deleteHero(hero: any) {
    console.log(hero);
    this.reqServ.eventTrigger.emit({
      data: hero
    });
  }

}
