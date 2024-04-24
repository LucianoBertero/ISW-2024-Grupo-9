import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmed-page',
  templateUrl: './confirmed-page.component.html',
  styleUrl: './confirmed-page.component.css',
})
export class ConfirmedPageComponent implements OnInit {
  spinner: boolean = false;

  rutaPDF = '../../../../assets/Luciano_Bertero_CV.pdf';

  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      this.spinner = true;
    }, 2500);
  }

  descargarPDF() {
    window.open(this.rutaPDF, '_blank');
  }
}
