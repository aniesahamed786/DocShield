import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path:"",
    component:LandingPageComponent
  },
 {
  path:"main",
  loadChildren: () => import('../app/Modules/Components/issuer/issuer.module').then((m) => m.IssuerModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
