import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ProjectService } from "../project.service";

@Component({
  selector: 'app-s-project',
  templateUrl: './s-project.component.html',
  styleUrls: ['./s-project.component.css']
})
export class SProjectComponent implements OnInit {

  proyecto :any = {};

  constructor( private activatedRoute: ActivatedRoute, private _projectservice : ProjectService   ) { //private _projectservice : ProjectService
    this.activatedRoute.params.subscribe ( params =>{
      this.proyecto = this._projectservice.getProyecto( params['id'] );
    } )
  }

  ngOnInit() {
  }

}
