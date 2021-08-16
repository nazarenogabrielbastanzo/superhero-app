import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from '../../services/requests.service';

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
    private reqServ: RequestsService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.reqServ.getHero(this.id)
      .then((hero: any) => {
        console.log(hero);
        this.hero = hero;
      })
      .catch((error: any) => {
        console.log(error);

      });

  }



}
