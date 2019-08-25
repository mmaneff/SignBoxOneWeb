import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    constructor(
        private router: Router) {

    }

    navigateTo(destination) {
      if (destination.indexOf('#') > -1) {
        console.log(destination);
      } else {
          this.router.navigate([destination]);
      }
    }
}
