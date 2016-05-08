import {Component} from '@angular/core';
import { TestComponent } from './test/test.component';
import { HeroComponent } from './heroe/hero.component';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1> <app-test></app-test> <app-hero></app-hero>',
    directives: [TestComponent, HeroComponent]
    
})
export class AppComponent { }
