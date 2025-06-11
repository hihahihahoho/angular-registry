import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

register();

export type TypeSwiper = HTMLElement & { swiper: Swiper } & {
  initialize: () => void;
};

@Component({
  selector: 'app-swiper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterModule],
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements AfterViewInit, OnDestroy {
  @Input() slides!: any;
  @Input() config!: SwiperOptions;
  @Input() swiperTpl!: TemplateRef<any>;
  @Input() slidesTpl!: TemplateRef<any>;

  @HostBinding('class.app-swiper') swipers = true;

  @ViewChild('swiper') swiper!: ElementRef<TypeSwiper>;

  ngAfterViewInit(): void {
    Object.assign(this.swiper.nativeElement, this.config);
    this.swiper.nativeElement.initialize();
  }

  ngOnDestroy(): void {
    this.swiper.nativeElement.swiper.destroy();
  }

  goToLastSlide() {
    const swiperInstance = this.swiper.nativeElement.swiper;
    if (swiperInstance) {
      swiperInstance.slideTo(swiperInstance.slides.length - 1);
    }
  }

  goToFirstSlide() {
    const swiperInstance = this.swiper.nativeElement.swiper;
    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }
  }

  handleItem(item: any) {
    console.log('hahaL:', item);
  }
}
