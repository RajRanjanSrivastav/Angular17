import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ServiceComponent } from '../components/service/service.component';
import { ContactComponent } from '../components/contact/contact.component';


export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'service',
        component:ServiceComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
];
