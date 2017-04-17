import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ProjectService } from "../project.service";

import { PROYECTO } from "../Card";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  proyectosArr : PROYECTO[] = [];
  buscar:string;

  constructor( private activatedRoute: ActivatedRoute, private _projectservice : ProjectService   ) { //private _projectservice : ProjectService
    this.activatedRoute.params.subscribe ( params =>{
      this.buscar = params['texto'];
      this.proyectosArr = this._projectservice.buscarProyectos(params['texto']);
    } )
  }

  ngOnInit() {
  }



}
