//import { Component, Input } from '@angular/core';
import { Hero } from "./hero";

// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  //TODO 05/07/17: https://angular.io/docs/ts/latest/tutorial/toh-pt5.html#!#revise-the-herodetailcomponent-

  @Input() hero: Hero;
}
