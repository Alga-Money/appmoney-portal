import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRegisterComponent } from './transaction-register.component';

describe('TransactionRegisterComponent', () => {
  let component: TransactionRegisterComponent;
  let fixture: ComponentFixture<TransactionRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
