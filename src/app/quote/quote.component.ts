import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
    quotes:Quote[] = [
      new Quote(1,'Love Quotes','Mireille','A friend is someone who knows all about you and still loves you.'),
      new Quote(2,'Life Quotes','Mireille','Life is really simple, but we insist on making it complicated.'),
      new Quote(3,'Inspiration Quotes','Mireille','Integrity Is The Most Valuable And Respected Quality Of Leadership. Always Keep Your Word.'),
      new Quote(4,'Success Quotes','Mireille','Success is not final; failure is not fatal: It is the courage to continue that counts.')
    ];

    toggleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    completeQuote(isComplete, index){
      if (isComplete) {
        this.quotes.splice(index,1);
      }
    }
    
  constructor() { }

  ngOnInit() {
  }

}
