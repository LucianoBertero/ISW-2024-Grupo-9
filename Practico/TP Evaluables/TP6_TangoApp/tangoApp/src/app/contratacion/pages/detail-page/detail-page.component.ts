import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';
import { OrderService } from '../../../services/order.service';
import { infoCard } from '../../interface/card';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css',
})
export class DetailPageComponent implements OnInit {
  public order?: infoCard;

  @Input() nroCard: number = 0;

  constructor(
    private route: Router,
    private location: Location,
    private orderService: OrderService
  ) {}
  ngOnInit(): void {
    this.order = this.orderService?.getOrden();
  }

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
