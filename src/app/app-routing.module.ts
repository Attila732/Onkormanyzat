import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { OrvosiugyekComponent } from './orvosiugyek/orvosiugyek.component';
import { ProfilComponent } from './profil/profil.component';



const routes: Routes = [


  {path:"app-body", component:BodyComponent,},
  {path:"login", component:LoginComponent},
  {path:"app-profil", component:ProfilComponent},
  {path:"orvos", component:OrvosiugyekComponent},
  
  {path:"app-nav",component:NavComponent},
  {path:"app-orvosiugyek",component:OrvosiugyekComponent},
  {path:"app-profil",component:ProfilComponent},

  {path:"**", component:BodyComponent, pathMatch:'full'},
//   {path:"karbantartas", component:KarbantartasComponent},
//   {path:"**", component:HomeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }