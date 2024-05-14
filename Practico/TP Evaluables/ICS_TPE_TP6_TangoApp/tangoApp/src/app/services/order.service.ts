import { Injectable } from '@angular/core';
import { infoCard } from '../contratacion/interface/card';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: infoCard = {
    nombre: 'Luciano Bertero',
    precio: 200,
    formaPago: '',
    estado: 'pendiente',
    fechaEntrega: '10/05/2024',
    fechaRetiro: '30/05/2024',
    codigo: '#45455r',
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

  setFechaEntrega(fechaEntrega: string) {
    this.orders.fechaEntrega = fechaEntrega;
  }
  setFechaRetiro(fechaRetiro: string) {
    this.orders.fechaRetiro = fechaRetiro;
  }

  getFechaEntrega() {
    return this.orders.fechaEntrega;
  }
  getFechaRetiro() {
    return this.orders.fechaRetiro;
  }

  setCodigo(codigo: string) {
    this.orders.codigo = codigo;
  }
  getCodigo() {
    return this.orders.codigo;
  }

  getNombre() {
    return this.orders.nombre;
  }

  getFormaPago() {
    return this.orders.formaPago;
  }
}
