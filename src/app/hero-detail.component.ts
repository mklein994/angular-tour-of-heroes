import { Component, Input } from '@angular/core';
import { Hero } from "./hero";

@Component({
    templateUrl: './hero-detail.component.html',
    selector: 'hero-detail',
})

export class HeroDetailComponent {
    @Input() hero: Hero;
}