import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ContactComponent } from "./contact/contact.component";
import {MatIconModule} from '@angular/material/icon';



const routes: Routes = [{
  path:'about',
  component:AboutComponent
},{
  path:'experience',
  component:ExperienceComponent
},{
  path:'projects',
  component:ExperienceComponent
},{
  path:'skills',
  component:ExperienceComponent
},{
  path : '',
  redirectTo : 'about',
  pathMatch:"full"
},{
  path : '**',
  component : ContactComponent
}];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions),MatIconModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
