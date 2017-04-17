import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../project.service";

import { PROYECTO } from "../Card";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {

  proyectos : PROYECTO[] = [];

  constructor( private _projectservice : ProjectService ) {
    
  }

  ngOnInit() {
    this.proyectos = this._projectservice.getProyectos();
    //console.log(this.proyectos);
  }

}
