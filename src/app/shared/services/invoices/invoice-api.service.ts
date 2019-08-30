import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../../model/invoice';
import { ApiRestService } from '../core/api-rest.service';
import { environment } from '../../../../environments/environment';
import { Customer } from '../../model/customer';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InvoiceApiService {

  constructor(private http: HttpClient, private apiRest: ApiRestService) { }

  getAllInvoices(): Observable<Invoice[]> {
    return this.apiRest.getAll<Invoice[]>(environment.urlInvoices, 'invoices', Invoice);
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.apiRest.getAll<Customer[]>(environment.urlInvoices, 'customers', Customer);
  }

  //test
  getAllProducts(){
    return this.http.get(environment.urlInvoices + `products`)
    .subscribe(data=>{
      console.log(data);
    });
  }
}
