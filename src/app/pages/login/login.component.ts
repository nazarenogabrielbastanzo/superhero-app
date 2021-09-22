import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private reqServ: RequestsService,
    private router: Router,
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
    } else {
      this.reqServ.login(this.email, this.password)
        .subscribe((resp: any) => {
          console.log(resp);
          localStorage.setItem('token', resp.token);
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Logged In'
          });
          this.router.navigate(['/home']);
        });
    }
  }

}
