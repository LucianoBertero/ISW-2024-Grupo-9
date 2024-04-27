import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface infoCard {
  nombre: string;
  precio: number;
  formaPago: string;
  estado: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input() infoCard: infoCard = {
    nombre: '',
    precio: 0,
    formaPago: '',
    estado: 'pendiente',
  };

  constructor(private route: Router) {}
  ngOnInit(): void {
    localStorage.clear();
  }

  contratar() {
    console.log('entro');
    console.log(this.infoCard);

    localStorage.setItem('infoCard', JSON.stringify(this.infoCard));

    if (this.infoCard.formaPago === 'efectivo') {
      this.infoCard.formaPago = 'efectivo';
      console.log(this.infoCard);

      localStorage.setItem('infoCard', JSON.stringify(this.infoCard));
      this.route.navigateByUrl('/contacting/detail');
    } else {
      localStorage.setItem('infoCard', JSON.stringify(this.infoCard));
      this.route.navigateByUrl('/contacting/payment-methods');
    }
  }
}
