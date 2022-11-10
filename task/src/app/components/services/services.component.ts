
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
 

})
export class ServicesComponent implements OnInit {
  
  constructor(private userservice: UserService) { }
  user:any=[];
  ngOnInit(): void {
    this.user=this.userservice.user;
  }
 
 
 
}
