import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SignUpComponent } from './login/sign-up.component';
import { NavComponent } from './nav/nav.component';



const routes: Routes = [
 
  {path:"app-body", component:BodyComponent, pathMatch:'full'},
  {path:"sign-up", component:SignUpComponent},
  {path:"app-nav",component:NavComponent}
 
//   {path:"karbantartas", component:KarbantartasComponent},
//   {path:"**", component:HomeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }