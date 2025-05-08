import { Component } from '@angular/core';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ngClass ke liye ye bhi
import { AuthServiceService } from 'src/app/guards/auth-service.service';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { Data_model } from 'src/app/model/model';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FormsModule,CommonModule,RouterModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // isDefaultDashboardRoute = true;
  isCollapsed = false;
  selectedColor = '#563d7c'; 
  data_model: Data_model []=[];
  DrugTenderList: Data_model []=[];
  EquipmentList: Data_model []=[];
  CivilTenderList: Data_model []=[];
  OtherTenderList: Data_model []=[];
  VisitedContentList: Data_model []=[];
  // pauseScroll: boolean = false;
  card1Pause = false;
  card2Pause = false;
  card3Pause = false;
  card4Pause = false;
  constructor(public authService: AuthServiceService, private router: Router,private ApiService:ApiServiceService) {
    // this.router.events.subscribe(() => {
    //   const current = this.router.url;
    //   this.isDefaultDashboardRoute = current === '/dashboard';
    // });
 }
  ngOnInit(): void {
    AOS.init();
    //   this.selectedColor = sessionStorage.getItem('selectedColor');
    this.ApiService.selectedColor$.subscribe(color => {
      this.selectedColor = color;
    });
    // this.GetDrugTenderList();
   this.GetAllTenderLists();
  //  this.isNewContent("2025-07-28T00:00:00")
  }

  GetAllTenderLists() {
    // debugger
    const apis = [
      { url: 'GetDrugTenderList?n=2', assignTo: 'DrugTenderList' },
      { url: 'GetEquipmentList?n=2', assignTo: 'EquipmentList' },
      { url: 'GetCivilTenderList?n=2', assignTo: 'CivilTenderList' },
      { url: 'GetOtherTenderList?n=2', assignTo: 'OtherTenderList' },
      { url: 'GetMostVisitedContentList?n=2', assignTo: 'VisitedContentList' }
    ];
  
    apis.forEach(api => this.fetchData(api.url, api.assignTo));
  }
  
  fetchData(endpoint: string, assignTo: string) {
    // debugger
    this.ApiService.get(endpoint).subscribe(
      (res: any) => {
        if(assignTo=='DrugTenderList'){
         this.DrugTenderList = res;

          console.log(endpoint, res);
        }else if (assignTo=='EquipmentList') {
          this.EquipmentList = res;
          console.log(endpoint, res);
        } else if (assignTo=='CivilTenderList') {
          this.CivilTenderList = res;
          console.log(endpoint, res);
        } else if (assignTo=='OtherTenderList') {
          this.OtherTenderList = res;
          // console.log(endpoint, res);
        } 
        // else if (assignTo=='VisitedContentList') {
        //   this.VisitedContentList = res;
        //   console.log(endpoint, res);
        // } 
        
        else {
          this.VisitedContentList = res;
            console.log(endpoint, res);
        }
      // assignTo = res;
      //   console.log(endpoint, res);
      },
      (err: Error) => {
        console.error(`Error fetching ${endpoint}:`, err);
      }
    );
  }
  
  onButtonClick(attachment_Id:any,name:string){
    // console.log(attachment_Id);
    // this.router.navigate(['/AttachmentList']);
    this.router.navigate(['/AttachmentList'], { 
      // queryParams: {Id: attachment_Id} 
      queryParams: {Id: attachment_Id, name: name} 
    });

  }



  GetDrugTenderList() {
    // debugger;
    try{
      
        this.ApiService.get('GetDrugTenderList?n=2').subscribe((res: any) => {
           this.data_model=res;
           this.DrugTenderList = this.data_model
            console.log(this.DrugTenderList);
            // console.log(JSON.stringify(res.user.role[0].roleName));
            // console.log(JSON.stringify(res.user.userName));
            // console.log(JSON.stringify(res.user))
  
        } ,
          (err: Error) => {
          //  debugger
          //  throw err;
          console.log(err);
          // this.toastr.error("Please Check userId and password!",'Error');
          //  alert(err.message)
         }
       );
        this.ApiService.get('GetEquipmentList?n=2').subscribe((res: any) => {
           this.data_model=res;
           this.EquipmentList= this.data_model
            console.log('GetEquipmentList?n=2', this.EquipmentList);
            // console.log(JSON.stringify(res.user.role[0].roleName));
            // console.log(JSON.stringify(res.user.userName));
            // console.log(JSON.stringify(res.user))
  
        } ,
          (err: Error) => {
          //  debugger
          //  throw err;
          console.log(err);
          // this.toastr.error("Please Check userId and password!",'Error');
          //  alert(err.message)
         }
       );
      
        this.ApiService.get('GetCivilTenderList?n=2').subscribe((res: any) => {
           this.data_model=res;
           this.CivilTenderList= this.data_model
            console.log('GetCivilTenderList?n=2', this.CivilTenderList);
            // console.log(JSON.stringify(res.user.role[0].roleName));
            // console.log(JSON.stringify(res.user.userName));
            // console.log(JSON.stringify(res.user))
  
        } ,
          (err: Error) => {
          //  debugger
          //  throw err;
          console.log(err);
          // this.toastr.error("Please Check userId and password!",'Error');
          //  alert(err.message)
         }
       );
        this.ApiService.get('GetOtherTenderList?n=2').subscribe((res: any) => {
           this.data_model=res;
           this.OtherTenderList= this.data_model
            console.log('GetOtherTenderList?n=2', this.OtherTenderList);
            // console.log(JSON.stringify(res.user.role[0].roleName));
            // console.log(JSON.stringify(res.user.userName));
            // console.log(JSON.stringify(res.user))
  
        } ,
          (err: Error) => {
          //  debugger
          //  throw err;
          console.log(err);
          // this.toastr.error("Please Check userId and password!",'Error');
          //  alert(err.message)
         }
       );
        this.ApiService.get('GetMostVisitedContentList?n=2').subscribe((res: any) => {
           this.data_model=res;
           this.VisitedContentList = this.data_model
            console.log('GetMostVisitedContentList?n=2', this.VisitedContentList);
            // console.log(JSON.stringify(res.user.role[0].roleName));
            // console.log(JSON.stringify(res.user.userName));
            // console.log(JSON.stringify(res.user))
  
        } ,
          (err: Error) => {
          //  debugger
          //  throw err;
          console.log(err);
          // this.toastr.error("Please Check userId and password!",'Error');
          //  alert(err.message)
         }
       );
    }
    catch(err:any){
      console.log(err);
      // throw err;
    }
  }
  
  isNewContent(publishingDate: string): boolean {
    // debugger
    // publishingDate="2025-05-05T00:00:00";
    const published = new Date(publishingDate);
    // console.log('published=',published );
    const today = new Date();
    // console.log('today=',today );
  
    // Difference in milliseconds
    const diffInMs = today.getTime() - published.getTime();
    // console.log('diffInMs=',diffInMs );
  
    // Convert to days
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  
    // Show "New" if published within last 7 days
    // console.log('diffInDays=',diffInDays );
    return diffInDays <= 7;
  }
  
  

}
