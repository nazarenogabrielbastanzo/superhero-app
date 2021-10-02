import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from '../../../services/requests.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any;
  hero: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private reqServ: RequestsService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.reqServ.getHero(this.id)
      .subscribe((resp: Hero) => {
        console.log(resp);

        this.hero = resp;
      });

  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

}
