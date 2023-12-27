import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { user } from './models/usermodels';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,UserComponent],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo';
  date = new Date();
  cnt = 0;
  inputValue="raj"
  fruits=['apple','mango','banana','grapes','sugarcane'];

  counter() {
    let ele = document.getElementById('value');
    this.cnt = this.cnt + 1;
    console.log(this.cnt);
  }
  decrement() {
    let ele = document.getElementById('value');
    if (this.cnt >0) {
      this.cnt = this.cnt - 1;
    }

    console.log(this.cnt);
  }

  receiveData(e:any){
    console.log(e);
    
  }

  users: Array<user> = [
    {salary : 3,age:2,name:'raj',imgPath:"j"}
  ]
}
