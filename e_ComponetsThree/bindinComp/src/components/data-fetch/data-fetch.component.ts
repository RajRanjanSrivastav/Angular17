import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { LiveDataService } from '../../services/live-data.service';

@Component({
  selector: 'app-data-fetch',
  standalone: true,
  imports: [],
  templateUrl: './data-fetch.component.html',
  styleUrl: './data-fetch.component.css',
})
export class DataFetchComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  fetchData() {
    this.http
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
