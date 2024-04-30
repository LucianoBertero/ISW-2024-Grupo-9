import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { ResendService } from '../../../services/resend.service';

@Component({
  selector: 'app-payment-methods-page',
  templateUrl: './payment-methods-page.component.html',
  styleUrl: './payment-methods-page.component.css',
})
export class PaymentMethodsPageComponent implements OnInit {
  isOptionSelected: boolean = false;
  isOption: string = '';
  formValid: boolean = false;
  terjetError: boolean = false;
  constructor(
    private route: Router,
    private orderService: OrderService,
    private ResendService: ResendService
  ) {}
  ngOnInit(): void {
    this.terjetError = false;
  }

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
    }

    if (this.terjetError === true) {
      this.ResendService.errorTarget = true;
      //se introdujo el error a la tarjeta
    }

    if (this.isOption === 'cash') {
      console.log('entro por aca');

      this.orderService.setFormaPago('efectivo');
      this.route.navigate(['/contacting/detail']);
    }
    if (
      (this.isOption === 'debit' || this.isOption === 'credit') &&
      this.formValid === true
    ) {
      console.log('entro por aca');

      this.orderService.setFormaPago('tarjeta');
      this.route.navigate(['/contacting/detail']);
    }
  }

  handleFormValid(event: { validForm: boolean; validTarjet: boolean }) {
    console.log(event.validTarjet);

    event.validTarjet === true
      ? (this.terjetError = true)
      : (this.terjetError = false);

    if (event.validForm) {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }
}
