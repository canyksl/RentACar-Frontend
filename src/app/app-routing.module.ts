import { PaymentComponent } from './components/payment/payment.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './components/guards/login.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", component: CarComponent },
  { path: "cars", component: CarComponent },
  { path: "cars/cardetail/:carid=", component: CarDetailComponent },
  { path: "cars/payment/:car", component: PaymentComponent, canActivate: [LoginGuard] },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
