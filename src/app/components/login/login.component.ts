import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private reqServ: RequestsService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.reqServ.login('challenge@alkemy.org', 'react');
  }

}
