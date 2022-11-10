import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ifvalid=false;
  islogin=false;
  user='gatadi.nuthankumar@gmail.com';
  password='12345'
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onlogin(){
    this.islogin=!this.islogin;

  }
  onsubmit(data:any){
   
    
    console.log(data.value);
    if(data.value.email==this.user && data.value.password==this.password){
      this.islogin=true;
      alert('you succesfully logged in')
      this.route.navigate(['/home'])
    }
      
    else{
      console.log('not loggedin');
      this.ifvalid=true;
    }
  }

}
