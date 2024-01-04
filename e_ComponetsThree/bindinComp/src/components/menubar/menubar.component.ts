import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css',
})
export class MenubarComponent {
  list: any = [
    {
      id: 1,
      name: 'Array',
      arr: ['single', 'double'],
    },
    {
      id: 2,
      name: 'String',
      arr: ['str', 'add'],
    },
    {
      id: 3,
      name: 'Stack',
      arr: ['queue', 'call Stack'],
    },
    {
      id: 4,
      name: 'Tree',
      arr: ['avl tree', 'binary tree'],
    },
  ];

  flag = false;
  j:any;
  chek() {
    console.log(this.list[0]);
  }

  trak(e:any, i:any) {
    console.log(i);
    this.j=i;
    
    e.preventDefault();
    this.flag = !this.flag;
    
  }
}
