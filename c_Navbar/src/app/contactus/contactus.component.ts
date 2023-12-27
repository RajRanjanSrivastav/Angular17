import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  show=false;
  color="red";
  getData(data:any)
  {
    console.log(data);
  }

  getColor(){
    this.color="black"
  }
}
