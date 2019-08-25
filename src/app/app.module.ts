import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Terceros
import { MDBBootstrapModule, NavbarModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Popias
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


// SERVICES
import { InvoiceApiService } from '../app/shared/services/invoices/invoice-api.service';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // FooterComponent,
    // NavBarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    SharedModule,
    NavbarModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModule,
    FormsModule
  ],
  providers: [
    InvoiceApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
