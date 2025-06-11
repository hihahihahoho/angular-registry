import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSpecialArrowComponent } from './card-special-arrow.component';

describe('CardSpecialArrowComponent', () => {
  let component: CardSpecialArrowComponent;
  let fixture: ComponentFixture<CardSpecialArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSpecialArrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSpecialArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
