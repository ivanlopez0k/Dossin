import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'transporte-arg', loadChildren: () => import('./transporte-arg/transporte-arg.module').then(m => m.TransporteArgModule) },
  { path: 'tercerizar-cargas', loadChildren: () => import('./tercerizar-cargas/tercerizar-cargas.module').then(m => m.TercerizarCargasModule) },
  { path: 'dador-de-carga', loadChildren: () => import('./dador-de-carga/dador-de-carga.module').then(m => m.DadorDeCargaModule) },
  { path: 'seguimiento', loadChildren: () => import('./seguimiento/seguimiento.module').then(m => m.SeguimientoModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }