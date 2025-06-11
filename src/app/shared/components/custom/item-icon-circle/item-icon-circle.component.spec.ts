import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIconCircleComponent } from './item-icon-circle.component';

describe('ItemIconCircleComponent', () => {
  let component: ItemIconCircleComponent;
  let fixture: ComponentFixture<ItemIconCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemIconCircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemIconCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
