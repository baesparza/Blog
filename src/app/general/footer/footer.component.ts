import { Component } from '@angular/core';
import { FooterService } from "./footer.service";
//Para Firebase
//import { AngularFire, FirebaseObjectObservable  } from 'angularfire2';

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
  //Para Firebase
  /*
  footerinfo: FirebaseObjectObservable <any>;
  constructor(af: AngularFire) {
    this.footerinfo = af.database.object('FooterInfo', { preserveSnapshot: true });
    this.footerinfo.subscribe(snapshot => {
      console.log(snapshot.val())
    });
  }
  */
  
     
}

