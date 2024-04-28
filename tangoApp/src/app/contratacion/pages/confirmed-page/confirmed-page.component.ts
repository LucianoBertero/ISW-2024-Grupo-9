import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { ResendService } from '../../../services/resend.service';
import { Subscription } from 'rxjs';
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
export class ConfirmedPageComponent implements OnInit, OnDestroy {
  spinner: boolean = false;

  rutaPDF = '../../../../assets/Luciano_Bertero_CV.pdf';

  infoCard: InfoCard | null = null;
  subs: Subscription = new Subscription();
  constructor(private router: Router, private orderService: OrderService, private resend: ResendService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.spinner = true;
    }, 2500);

    this.infoCard = this.orderService?.getOrden();
    console.log(this.infoCard);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
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
    this.subs.add(this.resend.send()
      .subscribe({
        next: p => {
          console.log('envail enviado: ', p);
          this.router.navigateByUrl('/contacting/orders');
        },
        error: p => console.log('error al enviar el mail: ', p)
      }));
  }

  descargarPDF() {
    window.open(this.rutaPDF, '_blank');
  }
}
