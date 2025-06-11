import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFeaturesHomepageComponent } from './card-features-homepage.component';

describe('CardFeaturesHomepageComponent', () => {
  let component: CardFeaturesHomepageComponent;
  let fixture: ComponentFixture<CardFeaturesHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFeaturesHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFeaturesHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
