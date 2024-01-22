import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndustriasComponent } from './industrias/industrias.component';

const routes: Routes = [{ path: '', component: IndustriasComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class IndustriasRoutingModule { }
