import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgInlineComponent } from './svg-inline.component';

describe('SvgInlineComponent', () => {
  let component: SvgInlineComponent;
  let fixture: ComponentFixture<SvgInlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SvgInlineComponent]
    });
    fixture = TestBed.createComponent(SvgInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
