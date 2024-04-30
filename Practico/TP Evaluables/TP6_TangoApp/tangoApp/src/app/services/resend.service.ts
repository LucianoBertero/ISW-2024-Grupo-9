import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderService } from './order.service';
import { OrdersComponent } from '../contratacion/pages/orders/orders.component';

@Injectable({
  providedIn: 'root',
})
export class ResendService {
  errorTarget: boolean = false;

  constructor(private http: HttpClient, private orderService: OrderService) {}

  send() {
    const nombrePersona = this.orderService.getNombre();
    const nombrePaquete = this.orderService.getCodigo();
    return this.http.post(`http://localhost:30001`, {
      nombrePaquete,
      nombrePersona,
    });
  }
}
