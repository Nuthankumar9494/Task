import { Component } from '@angular/core';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {
  title = 'task';
  user1:any=[];
  constructor(private user:UserService){

  }
  
  ngOnInit(){
    this.user1=this.user.user;
  }
  
}
