import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcalcComponent } from './formcalc.component';

describe('FormcalcComponent', () => {
  let component: FormcalcComponent;
  let fixture: ComponentFixture<FormcalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
