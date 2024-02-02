import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadorDeCargaComponent } from './dador-de-carga.component';

const routes: Routes = [
  { path: '', component: DadorDeCargaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DadorDeCargaRoutingModule { }
