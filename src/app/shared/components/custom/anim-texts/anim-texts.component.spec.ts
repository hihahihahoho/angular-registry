import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimTextsComponent } from './anim-texts.component';

describe('AnimTextsComponent', () => {
  let component: AnimTextsComponent;
  let fixture: ComponentFixture<AnimTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimTextsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
