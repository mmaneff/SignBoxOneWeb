import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Terceros
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {FormsModule} from '@angular/forms';
// Popias
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';


// SERVICES
import { InvoiceApiService } from '../app/shared/services/invoices/invoice-api.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [
    InvoiceApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
