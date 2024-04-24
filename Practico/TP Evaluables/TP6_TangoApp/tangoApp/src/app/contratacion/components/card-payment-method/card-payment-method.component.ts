import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-payment-method',
  templateUrl: './card-payment-method.component.html',
  styleUrl: './card-payment-method.component.css',
})
export class CardPaymentMethodComponent {
  @Output() optionSelected = new EventEmitter<string>();

  onOptionSelected(option: string) {
    this.optionSelected.emit(option);
  }
}
