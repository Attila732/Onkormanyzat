import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignUpComponent } from './login/sign-up.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilComponent } from './profil/profil.component';









@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    MainComponent,
    HeaderComponent,
    NavComponent,
    BodyComponent,
    ProfilComponent,
 
   
    

  


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, RouterModule.forRoot([]),AppRoutingModule, BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{





}
