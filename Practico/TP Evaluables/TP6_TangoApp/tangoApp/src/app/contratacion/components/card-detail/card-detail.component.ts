import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css',
})
export class CardDetailComponent implements OnInit {
  infoCard: any;

  ngOnInit(): void {
    const tarjetaGuardada = localStorage.getItem('infoCard');
    if (tarjetaGuardada) {
      this.infoCard = JSON.parse(tarjetaGuardada);
    } else {
    }

    console.log(this.infoCard);
  }
}
