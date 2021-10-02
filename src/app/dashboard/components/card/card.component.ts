import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RequestsService } from '../../../services/requests.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() hero!: Hero;

  constructor(
    private router: Router,
    private reqServ: RequestsService
  ) { }

  ngOnInit(): void {
    console.log(this.hero);
  }

  seeDetails(id: number) {
    this.router.navigate(['/dashboard/details', id]);
  }

  deleteHero(hero: Hero) {
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
