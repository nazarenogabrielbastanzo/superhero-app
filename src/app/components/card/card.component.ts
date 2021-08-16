import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() incomingData: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.incomingData);
  }

  seeDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

  deleteHero(id: number) {
    console.log(id);
  }

}
