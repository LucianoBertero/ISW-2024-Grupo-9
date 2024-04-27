import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-methods-page',
  templateUrl: './payment-methods-page.component.html',
  styleUrl: './payment-methods-page.component.css',
})
export class PaymentMethodsPageComponent {
  isOptionSelected: boolean = false;
  isOption: string = '';
  formValid: boolean = false;
  constructor(private route: Router) {}

  goBack(): void {
    this.route.navigate(['/quote']);
  }

  handleOptionSelected(option: string) {
    this.isOptionSelected = true;

    this.isOption = option;

    if (option === 'cash') {
      this.formValid = false;
    }
  }

  goNext(): void {
    if (!this.isOptionSelected) {
      alert('Por favor selecciona una opción de pago');
      return;
    }

    if (this.isOption === 'cash') {
      this.route.navigate(['/contacting/detail']);
    }
    if (this.isOption === 'debitCredit' && this.formValid === true) {
      console.log('entro por aca');
      this.route.navigate(['/contacting/detail']);
    }

    //control de opcion que marco
  }

  handleFormValid(valid: boolean) {
    if (valid) {
      this.formValid = true;
    }
  }
}
