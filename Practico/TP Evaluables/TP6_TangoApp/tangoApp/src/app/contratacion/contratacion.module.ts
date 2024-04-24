import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratacionRoutingModule } from './contratacion-routing.module';
import { ContractingLayoutComponent } from './layout/contracting-layout/contracting-layout.component';
import { NavbarComponent } from './components/nabvar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { QuotePageComponent } from './pages/quote-page/quote-page.component';
import { PaymentMethodsPageComponent } from './pages/payment-methods-page/payment-methods-page.component';
import { CardPaymentMethodComponent } from './components/card-payment-method/card-payment-method.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { ConfirmedPageComponent } from './pages/confirmed-page/confirmed-page.component';

@NgModule({
  declarations: [
    ContractingLayoutComponent,
    NavbarComponent,
    CardComponent,
    QuotePageComponent,
    PaymentMethodsPageComponent,
    CardPaymentMethodComponent,
    CardFormComponent,
    DetailPageComponent,
    CardDetailComponent,
    ConfirmedPageComponent,
  ],
  imports: [CommonModule, ContratacionRoutingModule, ReactiveFormsModule],
  exports: [],
})
export class ContratacionModule {}
