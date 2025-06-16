import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { SvgInlineComponent } from '@components/base/svgInline/svg-inline.component';
import { SwiperComponent } from '@components/base/swiper/swiper.component';
import { TabComponent } from '@components/base/tab/tab.component';
import { UI } from '@services/UI/ui.service';
import { SwiperOptions } from 'swiper/types';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-swiper-homepage',
  imports: [SvgInlineComponent, SwiperComponent,  TabComponent],
  templateUrl: './swiper-homepage.component.html',
  styleUrl: './swiper-homepage.component.scss',
})
export class SwiperHomepageComponent {
  readonly UI = inject(UI);
  slides = [
    {
      title: 'F-Card An tâm quản lý',
      description: 'Với F-Card, mọi chi phí xăng dầu đều được ghi nhận tự động, rõ ràng',
      image: '/media/imgs/Image container.png'
    },
    {
      title: 'Thanh toán dễ dàng',
      description: 'Thanh toán mọi hóa đơn chỉ với vài thao tác đơn giản',
      image: '/media/imgs/Image container.png'
    },
    {
      title: 'Chuyển tiền nhanh chóng',
      description: 'Chuyển tiền 24/7 với nhiều ưu đãi hấp dẫn',
      image: '/media/imgs/Image container.png'
    },
    {
      title: 'Tiết kiệm thông minh',
      description: 'Tối ưu hóa tiết kiệm với lãi suất hấp dẫn và linh hoạt',
      image: '/media/imgs/Image container.png'
    },
    {
      title: 'Bảo mật tuyệt đối',
      description: 'An toàn tối đa với công nghệ bảo mật đa lớp tiên tiến',
      image: '/media/imgs/Image container.png'
    },
    {
      title: 'Dịch vụ 24/7',
      description: 'Hỗ trợ khách hàng mọi lúc mọi nơi với đội ngũ chuyên nghiệp',
      image: '/media/imgs/Image container.png'
    }
  ]
  tabs = ['Tin tức','Khuyến mãi']
  config: SwiperOptions = {
    autoplay: true,
    speed: 500,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination-bullets',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 4,
    },
    spaceBetween: 24,
  };
}
