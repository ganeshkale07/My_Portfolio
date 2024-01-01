import { Component,Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  isMobileView : boolean = true;
  constructor(@Inject(DOCUMENT) private document: Document){

  }
  ngOnInit(){
  }

  hambugerMenuClick(){
    this.isMobileView = !this.isMobileView;
  }


}
