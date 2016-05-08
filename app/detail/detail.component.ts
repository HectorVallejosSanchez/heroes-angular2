import { Component, OnInit} from '@angular/core';
import { Hero } from '../heroe/hero';
import { RouteParams } from '@angular/router-deprecated';
import { HeroService } from '../heroe/hero.service';

@Component({
    moduleId: module.id,
    selector: 'app-detail',
    templateUrl: 'detail.component.html',
    
})
export class DetailComponent implements OnInit {
    constructor(private heroService: HeroService,
                private routeParams: RouteParams) { }
    
    hero : Hero;
    ngOnInit() { 
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id).then(hero => this.hero = hero);
    }
    goBack(){
        window.history.back();
    }
}