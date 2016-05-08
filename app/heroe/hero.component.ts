import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { DetailComponent } from '../detail/detail.component';
import { HeroService } from './hero.service';
import { Router } from '@angular/router-deprecated';

@Component({
    moduleId: module.id,
    selector: 'app-hero',
    templateUrl: 'hero.component.html',
    styleUrls: ['hero.component.css'],
    directives: [DetailComponent],
    
})
export class HeroComponent implements OnInit {
    constructor( private heroService: HeroService, private router: Router) { }
    selectedHero : Hero;
    heroes: Hero[];
    hero : Hero = {id:1, name:"hector"};
    onSelect(varhero : Hero){
        console.log(varhero);
        this.selectedHero = varhero;
    }
    ngOnInit() { 
        this.getHeroes();
    }
    getHeroes(){
        this.heroService.getHeroes().then(heroes => this.heroes = heroes)
    }
    gotoDetail(){
        this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }
}
/*var HEROES: Hero[] = [
        { "id": 11, "name": "Mr. Nice" },
        { "id": 12, "name": "Narco" },
        { "id": 13, "name": "Bombasto" },
        { "id": 14, "name": "Celeritas" },
        { "id": 15, "name": "Magneta" },
        { "id": 16, "name": "RubberMan" },
        { "id": 17, "name": "Dynama" },
        { "id": 18, "name": "Dr IQ" },
        { "id": 19, "name": "Magma" },
        { "id": 20, "name": "Tornado" }
        ];*/