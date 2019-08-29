import { Observable, BehaviorSubject, Subject, throwError, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, catchError, switchMap, mergeMap, tap } from 'rxjs/operators';
import {
  HttpClient,
  HttpResponse,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { ModelMapper } from '../../../core/mapping/modelMapper';



const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  })
};


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
        }),
        catchError(this.handleError<T>('getAll'))
    );
  }


  public getById<T>(url: string, endPoint: string, id: number): Observable<T> {
    if (!url || !endPoint) {
      return;
    }

    return this.http.get<T>(`${url}${endPoint}${id}`)
      .pipe(
        map((data) => {
          // return new ModelMapper.map(data);
          return data;
        }),
        catchError(this.handleError<T>('getById'))
    );
  }

  public create<T>(url: string, endPoint: string, item: any): Observable<T> {
    if (!url || !endPoint) {
      return;
    }

    return this.http.post<T>(`${url}${endPoint}`, JSON.stringify(item), httpOptions)
      .pipe(
        tap(_ => console.log(`create`)),
        catchError(this.handleError<T>('create'))
    );
  }

  public update<T>(url: string, endPoint: string, item: any): Observable<T> {
    if (!url || !endPoint) {
      return;
    }

    return this.http.put<T>(`${url}${endPoint}${item.id}`, JSON.stringify(item), httpOptions)
      .pipe(
        tap(_ => console.log(`update`)),
        catchError(this.handleError<any>('update'))
    );
  }

  public delete<T>(url: string, endPoint: string, id: number): Observable<T> {
    if (!url || !endPoint) {
      return;
    }

    return this.http.delete<T>(`${url}${endPoint}${id}`, httpOptions)
      .pipe(
        tap(_ => console.log(`deleted product id=${id}`)),
        catchError(this.handleError<T>('delete'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
