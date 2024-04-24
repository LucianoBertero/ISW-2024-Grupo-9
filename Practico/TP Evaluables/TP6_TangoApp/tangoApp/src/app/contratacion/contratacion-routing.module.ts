import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractingLayoutComponent } from './layout/contracting-layout/contracting-layout.component';
import { QuotePageComponent } from './pages/quote-page/quote-page.component';
import { PaymentMethodsPageComponent } from './pages/payment-methods-page/payment-methods-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { ConfirmedPageComponent } from './pages/confirmed-page/confirmed-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContractingLayoutComponent,
    children: [
      { path: 'quote', component: QuotePageComponent },
      {
        path: 'payment-methods',

        component: PaymentMethodsPageComponent,
      },
      {
        path: 'detail',

        component: DetailPageComponent,
      },
      {
        path: 'confirmated',

        component: ConfirmedPageComponent,
      },
      {
        path: '',
        redirectTo: 'quote',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratacionRoutingModule {}
