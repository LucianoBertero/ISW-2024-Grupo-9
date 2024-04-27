import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css',
})
export class DetailPageComponent {
  @Input() nroCard: number = 0;

  constructor(private route: Router, private location: Location) {}

  confirmated(): void {
    const infoCardString = localStorage.getItem('infoCard');
    if (infoCardString) {
      const infoCard = JSON.parse(infoCardString);

      infoCard.formaPago = 'efectivo';
      localStorage.setItem('infoCard', JSON.stringify(infoCard));
    }

    this.route.navigate(['/contacting/confirmated']);
  }

  goBack(): void {
    this.location.back();
  }
}
