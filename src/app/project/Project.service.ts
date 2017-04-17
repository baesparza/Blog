import { Injectable } from '@angular/core';
import { PROYECTO } from "./Card";

@Injectable()
export class ProjectService {
    
    private Projects: PROYECTO[] = [{
        titulo:"Iva",
        lenguaje:"java",
        repositorio:"https://github.com/baesparza/-java-FUNDAMENTOS-DE-PROGRAMACION/tree/master/Iva",
        info:"Programa para calcular el Iva.",
        gist:["https://gist.github.com/8177ef4e6a484a7555554dba0f2f59c2.git"]
    },{
        titulo:"Terreno",
        lenguaje:"java",
        repositorio:"https://github.com/baesparza/-java-FUNDAMENTOS-DE-PROGRAMACION/tree/master/Terreno",
        info:"Programa para calcular el valor de un terreno.",
        gist:[]
    },{
        titulo:"Transformar Horas",
        lenguaje:"java",
        repositorio:"https://github.com/baesparza/-java-FUNDAMENTOS-DE-PROGRAMACION/tree/master/TransformarHoras",
        info:"Transformador de tiempo a diferentes unidades.",
        gist:[]
    },{
        titulo:"Estadistica",
        lenguaje:"java",
        repositorio:"https://github.com/baesparza/-java-FUNDAMENTOS-DE-PROGRAMACION/tree/master/Estadistica",
        info:"Programa para encontrar la media de un arreglo de estaturas.",
        gist:[]
    }]

    constructor () {
    }

    getProyectos ():PROYECTO[] {
        return this.Projects;
    }

    getProyecto (idx:number) {
        return this.Projects[idx];
    }

    buscarProyectos(texto:string){
        let proyectoarr:PROYECTO[] = [];
        texto = texto.toLowerCase();

        for (let project of this.Projects) {

            let nombre = project.titulo.toLowerCase();
            if ( nombre.indexOf(texto) >= 0 ) {
                proyectoarr.push( project );
            }

        }

        return proyectoarr;

    }
}