import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TercerizarCargasComponent } from './tercerizar-cargas.component';

const routes: Routes = [
  { path: '', component: TercerizarCargasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TercerizarCargasRoutingModule { }
