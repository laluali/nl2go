import {AfterContentInit, Directive, ElementRef, Input} from '@angular/core';
import {UtilityService} from '../services/utility.service';

@Directive({
  selector: '[nlAgeInYear]'
})
export class AgeInYearDirective implements AfterContentInit {

  constructor(private elementRef: ElementRef, private util: UtilityService) { }

  @Input() birthDate: string;

  ngAfterContentInit(): void {
    try {
      this.elementRef.nativeElement.innerHTML = this.util.getDiffInYears(this.birthDate);
    } catch (e) {
      throw Error('Invalid date of birth encountered');
    }
  }

}
