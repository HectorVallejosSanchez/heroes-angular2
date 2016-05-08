import { Component, OnInit } from '@angular/core';
import { Hero } from './heroe/hero';
import { HeroService } from './heroe/hero.service';
import { Router } from '@angular/router-deprecated';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl : `dashboard.component.html`,
    providers: [HeroService] 
})
export class DashboardComponent implements OnInit {
    constructor(private heroService: HeroService, private router:Router) { }
    heroes: Hero[] = [];
    ngOnInit() { 
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
    }
    gotoDetail(hero: Hero){ 
        let link = ['HeroDetail', {id: hero.id}];
        this.router.navigate(link);
     }
}