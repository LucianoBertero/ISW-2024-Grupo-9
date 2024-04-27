import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-payment-methods-page',
  templateUrl: './payment-methods-page.component.html',
  styleUrl: './payment-methods-page.component.css',
})
export class PaymentMethodsPageComponent {
  isOptionSelected: boolean = false;
  isOption: string = '';
  formValid: boolean = false;
  constructor(private route: Router, private orderService: OrderService) {}

  infocard: any;

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
      console.log('entro por aca');
      // const infoCardString = localStorage.getItem('infoCard');
      // if (infoCardString) {
      //   const infoCard = JSON.parse(infoCardString);

      //   infoCard.formaPago = 'efectivo';
      //   localStorage.setItem('infoCard', JSON.stringify(infoCard));
      // }
      this.orderService.setFormaPago('efectivo');
      this.route.navigate(['/contacting/detail']);
    }
    if (this.isOption === 'debitCredit' && this.formValid === true) {
      console.log('entro por aca');
      // const infoCardString = localStorage.getItem('infoCard');
      // if (infoCardString) {
      //   const infoCard = JSON.parse(infoCardString);

      //   infoCard.formaPago = 'targeta';
      //   localStorage.setItem('infoCard', JSON.stringify(infoCard));
      // }

      this.orderService.setFormaPago('tarjeta');
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
