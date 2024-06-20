/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClientListPage } from './client-list-page.component';

describe('ClientesComponent', () => {
  let component: ClientListPage;
  let fixture: ComponentFixture<ClientListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientListPage],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
