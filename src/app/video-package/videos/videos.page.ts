import { Component, OnInit } from '@angular/core';

//Import ActivatedRoute and inject into constructor (to allow us to subscribe to the dynamic id passed on by the previous page)
import { ActivatedRoute } from '@angular/router';

//Import and inject NavController
import { NavController } from '@ionic/angular';

// Import and inject Service having my packages and data model class
import { VideoPackageService } from '../video-package.service';
import { VideoPackages } from '../video-package.model';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  loadedVideoPackage: VideoPackages;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private videoPackageService: VideoPackageService) { }

  ngOnInit() {
    //Subscribe is always active and not only when page is visible (so we could also have written it outside ngOnInit) 
    this.route.paramMap.subscribe(paramMap => {
      //Adding an If check for scenarios where no dynamic attribute has been passed
      if (!paramMap.has('subjectId')) {
        this.navCtrl.navigateBack('/tabs/video-package');
        return;
      }
      //If dynamic attribute has been passed, we will store it on our local variable, so that we can use it on our html template
      this.loadedVideoPackage = this.videoPackageService.accessSubjectId(paramMap.get('subjectId'));
    });  
  }

}
