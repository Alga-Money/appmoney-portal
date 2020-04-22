import {
  async, ComponentFixture, fakeAsync, inject, TestBed, tick
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  ActivatedRoute, ActivatedRouteStub, click, newEvent, Router, RouterStub
} from '../../../testing';

import { ConfirmDialogComponent } from './confirm-dialog.component';

import { AppModule } from '../../app.module';

////// Testing Vars //////
let activatedRoute: ActivatedRouteStub;
let comp: ConfirmDialogComponent;
let fixture: ComponentFixture<ConfirmDialogComponent>;

////// Tests //////
describe('ConfirmDialogComponent', () => {
  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
  });
  describe('with AppModule setup', AppModuleSetup);
  describe('with FormsModule setup', formsModuleSetup);
  describe('with SharedModule setup', sharedModuleSetup);
});
////////////////////
function AppModuleSetup() {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router, useClass: RouterStub },
      ]
    })
      .compileComponents();
  }));

}
/////////////////////
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
function formsModuleSetup() {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ConfirmDialogComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router, useClass: RouterStub },
      ]
    })
      .compileComponents();
  }));
}


///////////////////////
import { AppMaterialModule } from '../../app-material.module';
function sharedModuleSetup() {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppMaterialModule],
      declarations: [ConfirmDialogComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router, useClass: RouterStub },
      ]
    })
      .compileComponents();
  }));
}
