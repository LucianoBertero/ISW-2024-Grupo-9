import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css',
})
export class DetailPageComponent {
  @Input() nroCard: number = 0;

  constructor(private route: Router) {}

  confirmated(): void {
    this.route.navigate(['/contacting/confirmated']);
  }

  goBack(): void {
    this.route.navigate(['/contacting']);
  }
}
