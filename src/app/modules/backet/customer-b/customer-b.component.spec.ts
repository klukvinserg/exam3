import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBComponent } from './customer-b.component';

describe('CustomerBComponent', () => {
  let component: CustomerBComponent;
  let fixture: ComponentFixture<CustomerBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
