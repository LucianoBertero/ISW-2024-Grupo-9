import { OrdersComponent } from './../../pages/orders/orders.component';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../services/order.service';

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

  constructor(private route: Router, private orderService: OrderService) {}
  ngOnInit(): void {
    localStorage.clear();
  }

  contratar() {
    console.log(this.infoCard);

    this.orderService.setNombre(this.infoCard.nombre);
    this.orderService.setPrecio(this.infoCard.precio);
    this.orderService.setEstado('pendiente');

    if (this.infoCard.formaPago === 'efectivo') {
      // this.infoCard.formaPago = 'efectivo';

      this.orderService.setFormaPago('efectivo');
      // console.log(this.infoCard);

      // localStorage.setItem('infoCard', JSON.stringify(this.infoCard));
      this.route.navigateByUrl('/contacting/detail');
    } else {
      this.route.navigateByUrl('/contacting/payment-methods');
    }
  }
}
