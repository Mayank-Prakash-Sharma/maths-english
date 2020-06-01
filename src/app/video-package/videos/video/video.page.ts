import { Component, OnInit } from '@angular/core';

//import DomSanitizer (inject it in constructor) and SafeResourseUrl - For showcasing YT video 
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser"

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  vidUrl: SafeResourceUrl;
  constructor(private domSanitizer:DomSanitizer) { }

  ngOnInit() {
    //For showcasing YT video
    this.vidUrl = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/EgWGPPGoP3M");
  }

}
