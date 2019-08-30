import { Component, OnInit } from '@angular/core';
import { Invoice } from '../shared/model/invoice';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// Invoice Api Rest
import { InvoiceApiService } from '../shared/services/invoices/invoice-api.service';
import { Customer } from '../shared/model/customer';

// Auth Service (para login)
import { AuthService } from '../shared/services/auth/auth.service';

// Model de user
import { User } from '../shared/model/user';
// Alertas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  mail = '';
  password = '';

  invoices: Invoice[];
  customers: Customer[];

  constructor(private invoiceApi: InvoiceApiService, private authService: AuthService, private router: Router) { }
  public user: User = new User();
  ngOnInit() {
    //this.getAllInvoices();
    //this.getAllCustomers();
    if(this.authService.isAuthenticated()){
      this.router.navigateByUrl('/modulo-recibos');
      return;
    }
  }

  getAllInvoices() {
    this.invoiceApi.getAllInvoices().subscribe(
      data => {
        console.log(data);
        this.invoices = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  getAllCustomers() {
    this.invoiceApi.getAllCustomers().subscribe(
      data => {
        console.log(data);
        this.customers = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  login() {
    // console.log(form);
    // if ( form.invalid ) { return; }
    // this.user.username = mail;
    // this.user.password = password;
    // console.log("username: ", this.user.username);
    // console.log("password: ", this.user.password);
    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Wait please...',
      timer: 2000
    });
    Swal.showLoading();
    this.authService.login(this.user.username, this.user.password).subscribe( resp => {

      // Correct Login
      this.user.username = '';
      this.user.password = '';

      // this.router.navigateByUrl('/modulo-recibos');
      this.authService.setLogged(true);
      this.router.navigate(['modulo-recibos']);
      // Swal.close();
    }, (err) => {

      Swal.fire({
        type: 'error',
        title: 'Authentication error',
        text: err.error.message + " Try again"
      });
    });
    // this.router.navigate(['modulo-recibos']);
  }



}
