import { CarComponent } from './components/car/car.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { Observable } from 'rxjs';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from "ngx-toastr";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { LoginComponent } from './components/login/login.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { PaymentComponent } from './components/payment/payment.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    LoginComponent,
    BrandComponent,
    CarComponent,
    CarDetailComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
