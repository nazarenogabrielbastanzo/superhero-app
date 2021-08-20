import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import Swal from 'sweetalert2';

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
    if (this.email.trim().length === 0 || this.password.trim().length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Fill in all fields',
        timer: 5000
      });
      return;
    }
    this.reqServ.login(this.email, this.password);
  }

}
