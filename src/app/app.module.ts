import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignUpComponent } from './login/sign-up.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    MainComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{





}
