import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RequestsService]
})
export class HomeComponent implements OnInit {

  constructor(
    private reqServ: RequestsService
  ) { }

  ngOnInit(): void {
    this.reqServ.connect();
  }

}
