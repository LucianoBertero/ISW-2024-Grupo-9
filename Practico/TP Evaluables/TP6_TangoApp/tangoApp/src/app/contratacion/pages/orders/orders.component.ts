import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {}
  ngOnInit(): void {
    const infoCardString = localStorage.getItem('infoCard');
    if (infoCardString) {
      this.infoCard = JSON.parse(infoCardString);
    }

    console.log(this.infoCard);
  }

  redireccionar(): void {
    // Redirigir a la página deseada
    console.log('redireccionando');
    this.router.navigateByUrl('/contacting/quote'); // Cambia '/ruta-deseada' por la ruta a la que deseas redirigir
  }
}
