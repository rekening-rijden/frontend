import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBasepriceComponent } from './create-baseprice.component';

describe('CreateBasepriceComponent', () => {
  let component: CreateBasepriceComponent;
  let fixture: ComponentFixture<CreateBasepriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBasepriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBasepriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
