
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',loadChildren: () =>
  import('./Modules/landing/landing.module').then((m) => m.LandingModule)},
  {
    path: 'cpanel',
    loadChildren: () =>
      import('./Modules/panel/panel.module').then((m) => m.PanelModule),
  },
  // { path: 'login', component:, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
