import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { card } from "../card/Card";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  items: FirebaseListObservable<card[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
    this.items.subscribe(items => {
      items.forEach(item => {
          console.log('Item:', item);
      });
  });
  console.log("haoala",this.items);
  }

 
  ngOnInit() {
  }

}
