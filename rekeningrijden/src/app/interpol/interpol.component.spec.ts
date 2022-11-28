import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolComponent } from './interpol.component';

describe('InterpolComponent', () => {
  let component: InterpolComponent;
  let fixture: ComponentFixture<InterpolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
