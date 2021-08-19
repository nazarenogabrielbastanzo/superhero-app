import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-powerstats',
  templateUrl: './powerstats.component.html',
  styleUrls: ['./powerstats.component.css']
})
export class PowerstatsComponent implements OnInit {

  @Input() team: any;

  constructor() { }

  ngOnInit(): void {
  }

}
