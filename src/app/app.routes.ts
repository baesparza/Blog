import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './Home/main/main.component';
import { AboutComponent } from "./About/about/about.component";
import { ProjectComponent } from './project/project/project.component';
import { SProjectComponent } from "./project/s-project/s-project.component";
import { SearchComponent } from "./project/search/search.component";



const ROUTES: Routes = [
    { path: 'home', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectComponent },
    { path: 'project/:id', component: SProjectComponent },
    { path: 'search/:texto', component: SearchComponent },
    { path: '**', redirectTo:'home' },

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, {useHash: true}); 