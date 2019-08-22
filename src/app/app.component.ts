import { Component } from '@angular/core';
import { Quote} from './quote';import { Quote } from '@angular/compiler';
;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
quotes:Quote[] = [
{id:1,name:'Love Quotes'},
{id:2,name:'Life Quotes'},
{id:3,name:'Inspiration Quotes'},
{id:4,name:'Success Quotes'},
];

constructor(){
  this.quotes = ['Love Quotes', 'Life Quotes', 'Inspiration Quotes', 'Success Quotes']
} 
}
