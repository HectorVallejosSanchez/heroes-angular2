import {Component} from '@angular/core';
import { TestComponent } from './test/test.component';
import { HeroComponent } from './heroe/hero.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HeroService } from './heroe/hero.service';
import { DashboardComponent } from './dashboard.component';
import { DetailComponent } from './detail/detail.component';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1> <app-test></app-test> <app-hero></app-hero>
    <h1>{{tittle}}</h1>
    <a [routerLink]="['Heroes']">Heroes</a>
    <a [routerLink]="['Tablero']">Tablero</a>
    <a [routerLink]="['Test']">Test</a>
    <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS,HeroService]
    
})
@RouteConfig([
    {
        path: '/heroes',
        name:'Heroes',
        component: HeroComponent
    },
    {
        path: '/tablero',
        name:'Tablero',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/test',
        name: 'Test',
        component: TestComponent
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: DetailComponent
    }
])
export class AppComponent { }