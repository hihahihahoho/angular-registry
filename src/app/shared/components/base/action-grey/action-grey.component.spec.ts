import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionGreyComponent } from './action-grey.component';

describe('ActionGreyComponent', () => {
  let component: ActionGreyComponent;
  let fixture: ComponentFixture<ActionGreyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionGreyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionGreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
