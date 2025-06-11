import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccountHomepageComponent } from './card-account-homepage.component';

describe('CardAccountHomepageComponent', () => {
  let component: CardAccountHomepageComponent;
  let fixture: ComponentFixture<CardAccountHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAccountHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAccountHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
