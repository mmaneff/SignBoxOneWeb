import { Observable, BehaviorSubject, Subject, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import {
  HttpClient,
  HttpResponse,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { ModelMapper } from '../../../core/mapping/modelMapper';



@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) { }

  public getAll<T>(url: string, endPoint: string, itemType: any): Observable<T> {
    if (!url || !endPoint) {
      return;
    }

    return this.http.get<T>(`${url}${endPoint}`)
      .pipe(
        // map(data => data.map((item: any) => {
        //   return new ModelMapper(itemType).map(item);
        // })
        map((data) => {
          return new ModelMapper(itemType).map(data);
        })
    );
  }

}
