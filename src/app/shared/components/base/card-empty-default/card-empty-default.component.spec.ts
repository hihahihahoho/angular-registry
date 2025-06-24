import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmptyDefaultComponent } from './card-empty-default.component';

describe('CardEmptyDefaultComponent', () => {
  let component: CardEmptyDefaultComponent;
  let fixture: ComponentFixture<CardEmptyDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEmptyDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEmptyDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
