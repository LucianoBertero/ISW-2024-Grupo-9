import { Injectable } from '@angular/core';
interface infoCard {
  nombre: string;
  precio: number;
  formaPago: string;
  estado: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: infoCard = {
    nombre: '',
    precio: 0,
    formaPago: '',
    estado: 'pendiente',
  };

  constructor() {}

  setFormaPago(formaPago: string) {
    this.orders.formaPago = formaPago;
  }

  setNombre(nombre: string) {
    this.orders.nombre = nombre;
  }
  setPrecio(precio: number) {
    this.orders.precio = precio;
  }

  setEstado(estado: string) {
    this.orders.estado = estado;
  }

  getOrden() {
    return this.orders;
  }
}
