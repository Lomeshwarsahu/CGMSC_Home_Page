import { Component } from '@angular/core';
import { NavbarComponent } from 'src/app/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-about-cgmsc',
  imports: [NavbarComponent],
  templateUrl: './about-cgmsc.component.html',
  styleUrl: './about-cgmsc.component.css'
})
export class AboutCGMSCComponent {
  ngOnInit(): void {
    console.log('AboutCGMSCComponent loaded!');
  }
}
