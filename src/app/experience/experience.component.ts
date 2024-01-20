import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren , Renderer2, QueryList} from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  @ViewChildren('exp_section') experienceSec !: QueryList<ElementRef> ;
  observer !: IntersectionObserver;
  constructor(private renderer : Renderer2){}

  ngOnInit(): void {    
  }
  handleIntersection(isIntersecting: boolean) {
    if (isIntersecting) {
      console.log('Element is intersecting!');
      console.log(this.experienceSec.last);
      this.experienceSec.forEach((ele) => {
        console.log(ele)
        this.renderer.addClass(ele.nativeElement, 'highlight');

      })
      // Add your logic here
    } else {
      console.log('Element is not intersecting!');
      this.experienceSec.forEach((ele) => {
        this.renderer.removeClass(ele.nativeElement, 'highlight');

      })
      // Add your logic here
    }
  }
  ngAfterViewInit(): void {
   // this.observer.observe(this.experienceSec.nativeElement)
  }
}
