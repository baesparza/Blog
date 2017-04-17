import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Servicios
import { ProjectService } from "./project/project.service";
import { FooterService } from "./general/footer/footer.service";

//Rutas
import { APP_ROUTING } from "./app.routes";

//Components
import { AppComponent } from './app.component';
import { FooterComponent } from "./general/footer/footer.component";
import { MainComponent } from './Home/main/main.component';
import { CardComponent } from './project/card/card.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { AboutComponent } from './About/about/about.component';
import { ProjectComponent } from './project/project/project.component';
import { SProjectComponent } from './project/s-project/s-project.component';
import { SearchComponent } from './project/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    CardComponent,
    NavbarComponent,
    AboutComponent,
    ProjectComponent,
    SProjectComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    ProjectService,
    FooterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
