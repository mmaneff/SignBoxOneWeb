import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {



  userToken = '';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  constructor( private http: HttpClient) {
    this.readToken();
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('expires');
  }

  login( username: string, password: string ) {

    var data: any = {"email": username, "password": password};
    return this.http.post<any>(environment.urlInvoices+`login`, data)
            .pipe(map(user => {
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                //user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                this.saveToken(user['token'])
                console.log("user: ", user);
                return user;
            }));

  }


  private saveToken(tokenId: string) {
    localStorage.setItem('token', tokenId);
    const today = new Date();
    today.setSeconds( 3600 * 24 );
    localStorage.setItem('expires', today.getTime().toString());
    }

    private readToken() {
        if (!!localStorage.getItem('token')) {
        this.userToken = localStorage.getItem('token');
      } else {
        this.userToken = '';
      }

        return this.userToken;
    }

    isAuthenticated(): boolean {
      if (localStorage.getItem('token') == null ) {
        console.log("not authenticated");
        return false;
      }

      const expires = Number(localStorage.getItem('expires'));
      // console.log(expires);
      const expirationDate = new Date ();
      expirationDate.setTime(expires);

      if ( expirationDate > new Date() ) {
        return true;
      } else {
        console.log("not authenticated");
        return false;
      }
    }
}
