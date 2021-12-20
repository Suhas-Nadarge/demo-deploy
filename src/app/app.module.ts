import { SendEmailService } from './services/send-email.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HeaderComponent } from './components/header/header.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ViewHistoryComponent } from './components/view-history/view-history.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SendEmailComponent,
    HeaderComponent,
    ViewHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AngularEditorModule ,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [LoginService,SendEmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
