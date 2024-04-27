import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.spinner = true;
    }, 2500);
  }

  confirmar() {
    const infoCardString = localStorage.getItem('infoCard');

    // Verificar si hay información en el localStorage
    if (infoCardString) {
      // Parsear la información a un objeto
      const infoCard: InfoCard = JSON.parse(infoCardString);

      // Actualizar el estado a 'confirmado'
      infoCard.estado = 'confirmado';

      // Volver a guardar la información actualizada en el localStorage
      localStorage.setItem('infoCard', JSON.stringify(infoCard));
    }

    this.router.navigateByUrl('/contacting/orders');
  }

  descargarPDF() {
    window.open(this.rutaPDF, '_blank');
  }
}
