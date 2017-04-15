import { Component, OnInit, Input } from '@angular/core';

import { card } from "./Card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  private item: card;

  constructor() { }

  ngOnInit() {
  }

}
