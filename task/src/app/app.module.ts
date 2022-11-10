import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GuardsComponent } from './guards/guards.component';
import {auth} from './Services/auth.service';

import { Router } from '@angular/router';
import { CanComponent } from './components/can/can.component';
import { AuthorizationGuard } from './authorization.guard';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HomeComponent,
    GuardsComponent,
    CanComponent,
    LoginComponent,
     
    
    
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
    
   
    
  ],
  providers: [auth,AuthorizationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
