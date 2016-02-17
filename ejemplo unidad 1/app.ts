import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
import { NgFor } from "angular2/common";

@Component({
	selector: 'hello-world',
	template:'<ul><li *ngFor="#name of names">Hola {{ name }}, desde Angular 2! </li></ul>'
})

class HelloWord{
	names: string[];

	constructor(){
		this.names = ['Jorge', 'Juan', 'Ariel'];
	}
}

bootstrap(HelloWord);