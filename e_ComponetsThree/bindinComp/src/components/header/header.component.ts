import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  list: string[] = ['Array', 'String', 'Stack', 'LinkList', 'Tree'];
  track: any = [
    {
      id: 'Array',
      name: ['single', 'double'],
    },
    {
      id: 'String',
      name: ['parse', 'add'],
    },
    {
      id: 'Stack',
      name: ['parse', 'add'],
    },
    {
      id: 'LinkList',
      name: ['parse', 'add'],
    },
    {
      id: 'Tree',
      name: ['parse', 'add'],
    },
  ];
  flag = false;
  show() {
    this.flag = !this.flag;
    console.log(this.track);
  }
}
