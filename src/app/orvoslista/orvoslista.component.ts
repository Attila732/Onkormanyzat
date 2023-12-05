import { Component } from '@angular/core';
import { OrvosService } from '../orvos.service';

@Component({
  selector: 'app-orvoslista',
  templateUrl: './orvoslista.component.html',
  styleUrls: ['./orvoslista.component.css']
})
export class OrvoslistaComponent {
  keszlista:any;

  constructor(public orvoslista:OrvosService){
    this.keszlista = orvoslista.orvosserv
  }

}
