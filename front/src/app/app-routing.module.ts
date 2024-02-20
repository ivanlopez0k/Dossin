import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'servicios',
    loadChildren: () =>
      import('./feature/servicios/servicios.module').then((m) => m.ServiciosModule),
  },
  {
    path: 'industrias',
    loadChildren: () =>
      import('./feature/industrias/industrias.module').then((m) => m.IndustriasModule),
  },
  {
    path: 'viajes',
    loadChildren: () =>
      import('./feature/viajes/viajes.module').then((m) => m.ViajesModule),
  },
  {
    path: 'nosotros',
    loadChildren: () =>
      import('./feature/nosotros/nosotros.module').then((m) => m.NosotrosModule),
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./feature/contacto/contacto.module').then((m) => m.ContactoModule),
  },
  {
    path: 'flota',
    loadChildren: () =>
      import('./feature/flota/flota.module').then((m) => m.FlotaModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./feature/blog/blog.module').then((m) => m.BlogModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
