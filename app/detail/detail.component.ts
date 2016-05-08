import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroe/hero';
@Component({
    moduleId: module.id,
    selector: 'app-detail',
    templateUrl: 'detail.component.html'
})
export class DetailComponent implements OnInit {
    constructor() { }
    herov : Hero;
    ngOnInit() { 
        
    }

}