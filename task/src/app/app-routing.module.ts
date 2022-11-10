import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from './authorization.guard';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { CanComponent } from './components/can/can.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [{path:'can',component:CanComponent,canActivate:[AuthorizationGuard]},{path:'services',component:ServicesComponent},{path:'',component:LoginComponent},{path:'home',component:HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function AboutComponent(AboutComponent: any) {
  throw new Error('Function not implemented.');
}

