import { Component } from '@angular/core';
import { Quote} from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    new Quote(1,'Love Quotes','Mireille','A friend is someone who knows all about you and still loves you.',new Date(2019,1,14)),
    new Quote(2,'Life Quotes','Mireille','Life is really simple, but we insist on making it complicated.',new Date(2019,2,14)),
    new Quote(3,'Inspiration Quotes','Mireille','Integrity Is The Most Valuable And Respected Quality Of Leadership. Always Keep Your Word.',new Date(2019,3,14)),
    new Quote(4,'Success Quotes','Mireille','Success is not final; failure is not fatal: It is the courage to continue that counts.',new Date(2019,4,14))
  ];
// constructor(){
//   this.quotes = ['Love Quotes', 'Life Quotes', 'Inspiration Quotes', 'Success Quotes']
// } 
}
