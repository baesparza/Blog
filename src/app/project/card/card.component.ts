import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

import { PROYECTO } from "../Card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  proyecto: PROYECTO;
  @Input('index') i;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  verProyecto(idx : number){
    this.router.navigate( ['/project',idx] );
  }

}
