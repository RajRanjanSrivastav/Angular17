import { Component } from '@angular/core';
import { CcodePipe } from "../../ccode.pipe";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [CcodePipe]
})
export class AboutComponent {
number=7549210380
}
