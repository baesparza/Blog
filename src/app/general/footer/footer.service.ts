import { Injectable } from '@angular/core';
import { AUTORINFO } from "./autorinfo";

@Injectable()
export class FooterService {

private FooterInfo:AUTORINFO = {
  facebook : "https://www.facebook.com/profile.php?id=100013980753646",
  twitter : "https://twitter.com/Be81Bruno",
  github_profile : "https://github.com/baesparza",
  autor : "Bruno Esparza | 2017",
  github_repo : "https://github.com/baesparza/Portfolio",
  license : "https://opensource.org/licenses/mit-license.html",
  portfolio : "https://baesparza.github.io/Portfolio/"
 }


    constructor(){
    }

    getInfo () {
        return this.FooterInfo;
    }
}