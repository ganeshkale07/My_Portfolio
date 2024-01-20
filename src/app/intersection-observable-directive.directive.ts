import { Directive,ElementRef, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appIntersectionObservableDirective]'
})
export class IntersectionObservableDirectiveDirective {

  constructor(private el: ElementRef) { }

  @Output() intersected = new EventEmitter<boolean>();
  private observer!: IntersectionObserver;

  ngOnInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // Adjust threshold as needed
    };

    this.observer = new IntersectionObserver(entries => {
      const isIntersecting = entries[0].isIntersecting;
      this.intersected.emit(isIntersecting);
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }


}
