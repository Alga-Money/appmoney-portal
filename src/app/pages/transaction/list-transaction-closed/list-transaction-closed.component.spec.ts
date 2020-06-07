import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransactionClosedComponent } from './list-transaction-closed.component';

describe('ListTransactionClosedComponent', () => {
  let component: ListTransactionClosedComponent;
  let fixture: ComponentFixture<ListTransactionClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTransactionClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTransactionClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
