import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() dataEntrante: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.dataEntrante);
  }

  seeDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

}
