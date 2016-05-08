import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-test',
    templateUrl: 'test.component.html'
})
export class TestComponent implements OnInit {
    constructor() { }
    private json : Array<String>= [""];
    private test : string = "";
    ngOnInit() { 
       this.json = ["hector","christian","carlos"];
       this.test = "test-prueba";
       console.log(this.test);
    }

}
