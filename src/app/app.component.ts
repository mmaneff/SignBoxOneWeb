import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SignBoxOneWeb';

  logged = false;


  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.isLogged.subscribe(
      data => {
        console.log(data);
        this.logged = data.logged;
      },
      error => {
        console.log(error);
      }
    );

  }


}
