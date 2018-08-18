import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { ItemsService } from './services/items.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

import { ContactComponent } from './component/contact/contact.component';
import { AdditemComponent } from './component/additem/additem.component';
import { ReadXlsComponent } from './component/read-xls/read-xls.component';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './component/confirm/confirm.component';
import { ExaminationComponent } from './component/examination/examination.component';
import { ShowresultComponent } from './component/showresult/showresult.component';
import { DatepickerModule } from 'angular-mat-datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
const appRoutes: Routes = [
  { path: '', component: ReadXlsComponent },
  { path: 'Examination', component: ExaminationComponent },
  // { path: '', component: UserComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Newitem', component: AdditemComponent },
  { path: 'Confirm', component: ConfirmComponent },
  { path: 'examination', component: ExaminationComponent },
  { path: 'ShowresultComponent', component: ShowresultComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ContactComponent,
    AdditemComponent,
    ReadXlsComponent,
    ConfirmComponent,
    ExaminationComponent,
    ShowresultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  
    ReactiveFormsModule,
    DatepickerModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    BootstrapModalModule,
    BrowserAnimationsModule,
    NguiAutoCompleteModule,
    ToastModule.forRoot(),
    BootstrapModalModule.forRoot({ container: document.body })
  ],
  providers: [TodoService, ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
