import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessBarComponent } from './process-bar.component';

describe('ProcessBarComponent', () => {
  let component: ProcessBarComponent;
  let fixture: ComponentFixture<ProcessBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProcessBarComponent]
    });
    fixture = TestBed.createComponent(ProcessBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
