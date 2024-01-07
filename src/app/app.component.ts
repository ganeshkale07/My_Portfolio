import { Component,HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'portfolio';
  isMobileView : boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    //alert(event.currentTarget.innerWidth)
    console.log(window.innerWidth)
    if(window.innerWidth > 786){
      this.isMobileView = false;
    }
  }

  constructor(){
  }




  hambugerMenuClick(){
    this.isMobileView = !this.isMobileView;
  }


}
