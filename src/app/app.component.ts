import { Component } from '@angular/core';
import { AuthServiceService } from './guards/auth-service.service';
import { Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  standalone: false,
    selector: 'app-root',
    // imports: [NavbarComponent,],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'B-Town';
  constructor(public authService: AuthServiceService, private router: Router) {}

  // logout() {
  //   this.authService.logout();
  //   this.router.navigate(['/']);
  // }
}
