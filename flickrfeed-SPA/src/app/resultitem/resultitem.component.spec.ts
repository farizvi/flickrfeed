/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResultitemComponent } from './resultitem.component';

describe('ResultitemComponent', () => {
  let component: ResultitemComponent;
  let fixture: ComponentFixture<ResultitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
