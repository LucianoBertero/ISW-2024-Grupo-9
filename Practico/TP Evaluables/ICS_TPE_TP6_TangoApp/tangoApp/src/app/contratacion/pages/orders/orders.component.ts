import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../services/order.service';
interface InfoCard {
  nombre: string;
  precio: number;
  formaPago: string;
  estado: string;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent implements OnInit {
  infoCard: InfoCard | null = null;
  constructor(private router: Router, private orderService: OrderService) {}
  ngOnInit(): void {
    this.infoCard = this.orderService?.getOrden();
    console.log(this.infoCard);
  }

  redireccionar(): void {
    if (this.infoCard?.estado === 'confirmado') {
      return;
    }

    // Redirigir a la página deseada
    console.log('redireccionando');
    this.router.navigateByUrl('/contacting/quote'); // Cambia '/ruta-deseada' por la ruta a la que deseas redirigir
  }
}
