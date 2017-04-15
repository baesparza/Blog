import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';


export const firebaseConfig = {
  apiKey: "AIzaSyDpLVjGmuNX-eXyomSV7S-7DvuVQQozafY",
  authDomain: "blog-ced0f.firebaseapp.com",
  databaseURL: "https://blog-ced0f.firebaseio.com",
  projectId: "blog-ced0f",
  storageBucket: "blog-ced0f.appspot.com",
  messagingSenderId: "1093014395865"
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
