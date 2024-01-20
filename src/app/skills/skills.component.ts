import { Renderer2,Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @ViewChildren('skill_tag') skillTag !: QueryList<ElementRef>;
  constructor(private renderer : Renderer2){}

  handleIntersection(isIntersecting: boolean) {
    if (isIntersecting) {
      console.log('Element is intersecting!');
      console.log(this.skillTag.last);
      this.skillTag.forEach((ele) => {
        this.renderer.addClass(ele.nativeElement, 'animate-card');

      })
      // Add your logic here
    } else {
      console.log('Element is not intersecting!');
      this.skillTag.forEach((ele) => {
        this.renderer.removeClass(ele.nativeElement, 'animate-card');

      })
      // Add your logic here
    }
  }
}
