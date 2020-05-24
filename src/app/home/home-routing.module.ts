import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'test-package', 
        children:[
          {
            path: '',
            loadChildren: () => import('../test-package/test-package.module').then( m => m.TestPackagePageModule)
          }
        ]
      },
      {
        path: 'home-package', 
        children: [
          {
            path: '',
            loadChildren: () => import('../home-package/home-package.module').then( m => m.HomePackagePageModule)
          } 
        ]
      },
      {
        path: 'video-package', 
        children: [
          {
            path: '',
            loadChildren: () => import('../video-package/video-package.module').then( m => m.VideoPackagePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home-package',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home-package',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
