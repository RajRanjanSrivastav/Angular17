import { Component } from '@angular/core';
import { StationsService } from '../../serevices/stations.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StationsService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
