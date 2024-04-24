import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrl: './quote-page.component.css',
})
export class QuotePageComponent {
  constructor(private router: Router) {}

  goToPaymentMethods() {
    console.log('Go to payment methods');
    this.router.navigate(['payment-methods']);
  }
}
