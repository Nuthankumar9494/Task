import { Component, OnInit } from '@angular/core';
import { auth } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  constructor( private userservice:UserService,private authservice:auth) { }
  home:any=[];
  ngOnInit(): void {
    this.home=this.userservice.user;
  }
 login(){
   this.authservice.authenticate();
 }
 logout(){
  this.authservice.logout();
 }
  

}
