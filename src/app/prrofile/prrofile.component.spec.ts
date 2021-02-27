import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrrofileComponent } from './prrofile.component';

describe('PrrofileComponent', () => {
  let component: PrrofileComponent;
  let fixture: ComponentFixture<PrrofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrrofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrrofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
