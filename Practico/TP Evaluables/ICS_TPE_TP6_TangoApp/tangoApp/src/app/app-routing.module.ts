import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contacting',
    loadChildren: () =>
      import('./contratacion/contratacion.module').then(
        (m) => m.ContratacionModule
      ),
  },
  {
    path: '**',
    redirectTo: 'contacting',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
