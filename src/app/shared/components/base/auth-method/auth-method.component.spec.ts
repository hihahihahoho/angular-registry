import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMethodComponent } from './auth-method.component';

describe('AuthMethodComponent', () => {
  let component: AuthMethodComponent;
  let fixture: ComponentFixture<AuthMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthMethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
