import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'invoice-list', pathMatch: 'full' },
  { path: 'invoice-list', component: InvoiceListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloRecibosRoutingModule { }


