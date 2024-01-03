import { Component, Inject, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  httpClient = inject(HttpClient);
  ngOnInit(): void {
    
  }

  fetchData(){
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users`)
    .subscribe((data:any)=>{
      console.log(data);
    })
    
  }

}
