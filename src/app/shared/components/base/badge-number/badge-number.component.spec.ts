import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeNumberComponent } from './badge-number.component';

describe('BadgeNumberComponent', () => {
  let component: BadgeNumberComponent;
  let fixture: ComponentFixture<BadgeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
