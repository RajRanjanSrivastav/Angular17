import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input() name:any;

@Output() myEvent = new EventEmitter<String>();

pressBtn(){
  this.myEvent.emit("coders never quit the problems unsolved");
}
}
