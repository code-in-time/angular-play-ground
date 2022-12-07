import { ComponentFactoryResolver, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Subscription, timer, Observable, takeUntil } from 'rxjs';

@Directive({
  selector: '[appThrottleThis]'
})
export class ThrottleThisDirective {
  @Input() limit = 300;
  private counter = 0;
  private subscription?: Subscription;
  private interval?: any; // :  NodeJS.Timeout

  observable$: Observable<number>;
  private textValue = '';

  constructor(public el: ElementRef) {
    console.log('el', el);


    this.observable$ = new Observable<number>(subscriber => {
      this.textValue = el.nativeElement.innerText;
      this.interval = setInterval(() => {
        this.counter++
        this.el.nativeElement.innerText = `${this.textValue} (${this.counter})`
        subscriber.next(this.counter);
      }, this.limit)
      
    });
  }

  @HostListener('mousedown')
  onmouseEnter() {
    console.log('mousedown');
    this.counter = 0;
    this.el.nativeElement.classList.add('myClass');

    console.log('limit', this.limit);

    this.subscription = this.observable$.subscribe({
      next: (x) => {
        console.log('x', x)
        if (x >= 7) {
          this.subscription?.unsubscribe();
          clearInterval(this.interval)
          this.el.nativeElement.innerText = this.textValue;
          this.disableButton();
        }
      }
    });



  }

  @HostListener('mouseup')
  onmouseLeave() {
    console.log('mouseup');
    this.el.nativeElement.classList.remove('myClass');
    console.log('timer', this.limit);
    this.subscription?.unsubscribe();
    clearInterval(this.interval);
    this.el.nativeElement.innerText = this.textValue;

  }

  disableButton() {
    this.el.nativeElement.setAttribute('disabled', true)
  }





}
