import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  getItems(apiUrl: string): Observable<any> {
    return this.http.get<any>(apiUrl).pipe(
      // tap(data => console.log(data)), // eyeball results in the console
      catchError(this.handleError)
    );
  }

  getFavoriteItems(): Observable<any> {
    return this.http.get<any[]>('/api/favorites').pipe(
      tap(data => console.log(data)), // eyeball results in the console
      catchError(this.handleError)
    );
  }

  setComment(item: any, comment: string): Observable<void> {
    return this.http.patch<any>('/api/favorites', {...item, comment}).pipe(
      catchError(this.handleError)
    );
  }

  setIsFavorite(item: any, isFavorite: boolean): Observable<void> {
    return this.http.post<any>('/api/favorites', item).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }
}