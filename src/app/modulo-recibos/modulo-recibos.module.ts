import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloRecibosRoutingModule } from './modulo-recibos-routing.module';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';


@NgModule({
  declarations: [
    InvoiceListComponent,
  ],
  imports: [
    CommonModule,
    ModuloRecibosRoutingModule,
  ]
})
export class ModuloRecibosModule {}



