import { Component } from '@angular/core';
import { AuthServiceService } from '../guards/auth-service.service';
import { Router, RouterModule } from '@angular/router';
import { NgFor, CommonModule, NgStyle } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ApiServiceService } from '../service/api-service.service';
@Component({
    selector: 'app-navbar',
    standalone: true, // ✅ Make it a standalone component
    imports: [NgFor,CommonModule, NgStyle,NgbCollapseModule,FormsModule, RouterModule],
    // 
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isDarkMode = false;
 isEquipmentOpen = false;
  isDrugOpen = false;
  isCGMSCLOpen  = false;
  isInfrastructureOpen = false;
  isRecruitmentOpen = false;
  isTendersOpen = false;
  isGalleryOpen = false;
  isDownloadsOpen = false;
  isCareersOpen = false;
  activeNav = 'home';

  isCollapsed = false;
  // selectedColor = '#563d7c'; 
  // selectedColor = 'linear-gradient(to right, #FF6F00, #ffbf88, #2a7a2e )'; 
  selectedColor = '#FF6F00'; 
  // Default color [style.background]="selectedColor" style="transition: background 0.5s;"
  userName:any;
  constructor(public authService: AuthServiceService, private router: Router,private API:ApiServiceService) {
     // Load initial color
     const storedColor = sessionStorage.getItem('selectedColor');
     if (storedColor) {
       this.selectedColor = storedColor;
     }
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('bg-dark', this.isDarkMode);
    document.body.classList.toggle('text-light', this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  ngOnInit() {
     sessionStorage.setItem('selectedColor',this.selectedColor);
    // var User = JSON.parse(localStorage.getItem('currentUser') || '{}')
    this.userName = localStorage.getItem('userName');
    // var User=res.user;
    // {"user":{"userName
    // console.log(userName);
   
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  themeClass: string = 'btn-primary';  // Default theme

  // Method to change theme
  changeTheme(theme: string) {
    this.themeClass = `btn-${theme}`;
  }



  // toggleCollapse(selectedColor :any) {
  //   // debugger
  //   // console.log(selectedColor)
  //   if(selectedColor!='#563d7c'){

  //     sessionStorage.setItem('selectedColor',selectedColor);
  //   }
  //   this.isCollapsed = !this.isCollapsed;

  // }

  // selectedColor: string = '#FF6F00';
// gradientStyle: string = '';

// updateGradient() {

//   this.gradientStyle = `linear-gradient(to right, ${this.selectedColor},#ffbf88, #2E7D32)`;
// }
  toggleCollapse(color: string) {
    // debugger;
//  this.selectedColor  = `linear-gradient(to right,#FF6F00 ,#ffbf88,${color})`;

if (color !== '#FF6F00') {
      this.API.setColor(color);
    }
    this.isCollapsed = !this.isCollapsed;
  }
}