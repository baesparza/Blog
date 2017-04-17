import { Component } from '@angular/core';
import { FooterService } from "./footer.service";

import { AUTORINFO } from './autorinfo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {

  footerinfo:AUTORINFO;
  
  constructor (private _footerService:FooterService) {
    this.footerinfo = this._footerService.getInfo();

  }
  
     
}

