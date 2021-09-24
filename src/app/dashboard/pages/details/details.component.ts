import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from '../../../services/requests.service';

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
      .subscribe((resp: any) => {
        console.log(resp);

        this.hero = resp;
      });
      // .then((hero: any) => {
      //   console.log(hero);
      //   this.hero = hero;
      // })
      // .catch((error: any) => {
      //   console.log(error);

      // });

  }

  goBack() {
<<<<<<< HEAD:src/app/heroes/pages/details/details.component.ts
    this.router.navigate(['/heroes/home']);
=======
    this.router.navigate(['/dashboard']);
>>>>>>> 22sep2021_2:src/app/dashboard/pages/details/details.component.ts
  }

}
