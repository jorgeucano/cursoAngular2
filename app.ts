import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";

@Component({
	selector: 'hello-world',
	template:'<div>Hola {{ name }}, desde Angular 2! </div>'
})

class HelloWord{
	name: string;

	constructor(){
		this.name = 'Jorge';
	}
}

bootstrap(HelloWord);