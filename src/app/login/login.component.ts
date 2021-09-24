import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8)
    ])
  });

  constructor(
    private reqServ: RequestsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.reqServ.login(this.myForm.value.email, this.myForm.value.password)
      .subscribe((resp: any) => {
        console.log(resp);
        localStorage.setItem('token', resp.token);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Logged In',
          timer: 5000
        });
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: error?.error?.error,
          timer: 5000
        });
        console.log(error?.error?.error);

        this.myForm.reset();
      });
  }

}
