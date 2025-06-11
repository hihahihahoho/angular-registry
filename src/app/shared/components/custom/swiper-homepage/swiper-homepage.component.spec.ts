import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperHomepageComponent } from './swiper-homepage.component';

describe('SwiperHomepageComponent', () => {
  let component: SwiperHomepageComponent;
  let fixture: ComponentFixture<SwiperHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
