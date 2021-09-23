import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-averages',
  templateUrl: './averages.component.html',
  styleUrls: ['./averages.component.css']
})
export class AveragesComponent implements OnInit {

  @Input() team: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.team);

  }
}
