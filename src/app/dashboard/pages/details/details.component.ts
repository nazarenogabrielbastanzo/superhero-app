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

  id!: number;
  hero!: Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private reqServ: RequestsService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((data: any) => {
      console.log(data);
      this.id = +(data.params.id);
    });

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
