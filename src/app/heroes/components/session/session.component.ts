import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  constructor(
    private reqServ: RequestsService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.reqServ.clearStorage();
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Logged Out'
    });
  }

}
