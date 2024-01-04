import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveDataService {
  // errorHandler!: ((err: any, caught: Observable<Object>) => ObservableInput<any>);

  // constructor(private http:HttpClient) {
  //  }

  //  getData():Observable<any>{
  //   return this.http.get(`https://jsonplaceholder.typicode.com/comments`).pipe(catchError(this.errorHandler));
  //  }
}
