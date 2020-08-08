import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserData } from '../user-data';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  ServerUrl = 'https://api.80startups.com/user/getAllUser/2';
  errorData: {};

  constructor(private http: HttpClient) { }

  retrevAlldata() {
    return this.http.get<UserData>(this.ServerUrl).pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedDatas() {
    return this.http.get<UserData>(this.ServerUrl).pipe(
      catchError(this.handleError)
    );
  }
 
  


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong,

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
