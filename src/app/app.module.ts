import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { AngularFireModule } from 'angularfire2';//Para Firebase


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


/*
export const firebaseConfig = {
    apiKey: "AIzaSyBuMV2gTDFuFxXLHvEdgtPRtxr7XMsk9EA",
    authDomain: "blog-73906.firebaseapp.com",
    databaseURL: "https://blog-73906.firebaseio.com",
    projectId: "blog-73906",
    storageBucket: "blog-73906.appspot.com",
    messagingSenderId: "1087086010773"
};
*/
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
    //AngularFireModule.initializeApp(firebaseConfig),//Para Firebase
    APP_ROUTING
  ],
  providers: [
    ProjectService,
    FooterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
