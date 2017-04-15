import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { AUTORINFO } from './autorinfo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {

  footerinfo: FirebaseObjectObservable<AUTORINFO>;

  constructor(af: AngularFire) {
    this.footerinfo = af.database.object('https://blog-ced0f.firebaseio.com/footerinfo');
    this.footerinfo.subscribe(console.log)

  }

  private nombre= this.footerinfo;
}

