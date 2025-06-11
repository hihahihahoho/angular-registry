import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseConfirmComponent } from './base-confirm.component';

describe('BaseConfirmComponent', () => {
  let component: BaseConfirmComponent;
  let fixture: ComponentFixture<BaseConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseConfirmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
