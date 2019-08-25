import { NavbarModule, DropdownModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SharedService } from './shared.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  imports: [CommonModule, NavbarModule, DropdownModule.forRoot(), MDBBootstrapModule.forRoot(), RouterModule],
  exports: [NavBarComponent, FooterComponent],
  providers: [SharedService],
  entryComponents: []
})
export class SharedModule { }
