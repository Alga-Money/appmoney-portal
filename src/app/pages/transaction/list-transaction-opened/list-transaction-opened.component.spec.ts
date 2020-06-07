import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransactionOpenedComponent } from './list-transaction-opened.component';

describe('ListTransactionOpenedComponent', () => {
  let component: ListTransactionOpenedComponent;
  let fixture: ComponentFixture<ListTransactionOpenedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTransactionOpenedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTransactionOpenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
