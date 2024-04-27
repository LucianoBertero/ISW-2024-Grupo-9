import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css',
})
export class CardDetailComponent implements OnInit {
  infoCard: any;
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.infoCard = this.orderService?.getOrden();
    console.log(this.infoCard);
  }
}
