import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  list:any[]=[];
  addTask(item: string) {
    console.log(item);
    this.list.push({id:this.list.length,name:item})
  }
  removeItem(id:number){
    this.list = this.list.filter(hold=>hold.id!=id);
  }
}
