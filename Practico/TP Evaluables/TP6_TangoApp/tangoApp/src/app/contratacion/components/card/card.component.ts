import { OrdersComponent } from './../../pages/orders/orders.component';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { infoCard } from '../../interface/card';

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
    fechaEntrega: '10/05/2024',
    fechaRetiro: '30/05/2024',
    codigo: '',
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
    this.orderService.setFechaEntrega(this.infoCard.fechaEntrega);
    this.orderService.setFechaRetiro(this.infoCard.fechaRetiro);
    this.orderService.setNombre(this.infoCard.nombre);
    this.orderService.setCodigo(this.infoCard.codigo);

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
