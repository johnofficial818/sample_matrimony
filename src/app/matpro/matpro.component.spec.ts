import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatproComponent } from './matpro.component';

describe('MatproComponent', () => {
  let component: MatproComponent;
  let fixture: ComponentFixture<MatproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
