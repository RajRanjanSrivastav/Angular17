import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ServiceComponent } from '../components/service/service.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomeComponent } from '../components/home/home.component';
import { MenubarComponent } from '../components/menubar/menubar.component';
import { DataFetchComponent } from '../components/data-fetch/data-fetch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    ServiceComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MenubarComponent,
    DataFetchComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bindinComp';
}
