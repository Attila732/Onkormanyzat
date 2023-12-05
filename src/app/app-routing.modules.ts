import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { SignUpComponent } from './login/sign-up.component';
import { NavComponent } from './nav/nav.component';
import { OrvosEgyebUgyekComponent } from './orvos-egyeb-ugyek/orvos-egyeb-ugyek.component';
import { ProfilComponent } from './profil/profil.component';



const routes: Routes = [

  {path:"**", component:BodyComponent, pathMatch:'full'},
  {path:"app-body", component:BodyComponent,},
  {path:"sign-up", component:SignUpComponent},
  {path:"app-profil", component:ProfilComponent},
  
  {path:"app-nav",component:NavComponent},
  {path:"app-orvos-egyeb-ugyek",component:OrvosEgyebUgyekComponent},
  {path:"app-profil",component:ProfilComponent},

 
//   {path:"karbantartas", component:KarbantartasComponent},
//   {path:"**", component:HomeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }