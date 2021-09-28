import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RequestsService } from '../../../services/requests.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() incomingData: any;

  constructor(
    private router: Router,
    private reqServ: RequestsService
  ) { }

  ngOnInit(): void {
    console.log(this.incomingData);
  }

  seeDetails(id: number) {
    this.router.navigate(['/dashboard/details', id]);
  }

  deleteHero(hero: any) {
    console.log(hero);

    Swal.fire({
      title: 'Are you sure?',
      text: `Sure to eliminate ${hero.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, delete ${hero.name}!`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          `${hero.name} deleted.`,
          'success'
        )

        this.reqServ.eventTrigger.emit({
          data: hero
        });
      }
    })
  }

}
