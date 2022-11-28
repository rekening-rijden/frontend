import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcarComponent } from './selectcar.component';

describe('SelectcarComponent', () => {
  let component: SelectcarComponent;
  let fixture: ComponentFixture<SelectcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectcarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
