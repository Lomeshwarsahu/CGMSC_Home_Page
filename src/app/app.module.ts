import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { provideHttpClient } from '@angular/common/http'; // ✅ Import this
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ✅ Required
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material-module';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { MatTableExporterModule } from 'mat-table-exporter';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,ToastrModule.forRoot(),
    BrowserAnimationsModule,NgbCollapseModule
    // , MatTableExporterModule
    ,MaterialModule, 
     NgxSpinnerModule.forRoot({ type: 'ball-atom' }),
    //  NgxSpinnerModule.forRoot({ type: 'line-scale-party' }),
  ],
  providers: [provideHttpClient() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
