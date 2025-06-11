import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseResultComponent } from './base-result.component';

describe('BaseResultComponent', () => {
  let component: BaseResultComponent;
  let fixture: ComponentFixture<BaseResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
