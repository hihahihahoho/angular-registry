import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelAddOnComponent } from './label-add-on.component';

describe('LabelAddOnComponent', () => {
  let component: LabelAddOnComponent;
  let fixture: ComponentFixture<LabelAddOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelAddOnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelAddOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
