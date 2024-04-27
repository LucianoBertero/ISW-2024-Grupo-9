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
  selector: 'app-confirmed-page',
  templateUrl: './confirmed-page.component.html',
  styleUrl: './confirmed-page.component.css',
})
export class ConfirmedPageComponent implements OnInit {
  spinner: boolean = false;

  rutaPDF = '../../../../assets/Luciano_Bertero_CV.pdf';

  infoCard: InfoCard | null = null;

  constructor(private router: Router, private orderService: OrderService) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.spinner = true;
    }, 2500);

    this.infoCard = this.orderService?.getOrden();
    console.log(this.infoCard);
  }

  confirmar() {
    // const infoCardString = localStorage.getItem('infoCard');

    // // Verificar si hay información en el localStorage
    // if (infoCardString) {
    //   // Parsear la información a un objeto
    //   const infoCard: InfoCard = JSON.parse(infoCardString);

    //   // Actualizar el estado a 'confirmado'
    //   infoCard.estado = 'confirmado';

    //   // Volver a guardar la información actualizada en el localStorage
    //   localStorage.setItem('infoCard', JSON.stringify(infoCard));
    // }

    this.orderService.setEstado('confirmado');

    this.router.navigateByUrl('/contacting/orders');
  }

  descargarPDF() {
    window.open(this.rutaPDF, '_blank');
  }
}
