import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransporteArgComponent } from './transporte-arg.component';

const routes: Routes = [
  { path: '', component: TransporteArgComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransporteArgRoutingModule { }
