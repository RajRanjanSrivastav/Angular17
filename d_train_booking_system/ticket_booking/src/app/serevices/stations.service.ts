import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StationsService {
  apiEndPoint:string = '';

  constructor(private http:HttpClient) {
  
   }

   fetechData(){
    this.http.get(`https://dummyjson.com/products/1`)
    .subscribe(data=>{
      console.log(data);
      
    })
   }
}
