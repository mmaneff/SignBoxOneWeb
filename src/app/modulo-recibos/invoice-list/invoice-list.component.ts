import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

}
