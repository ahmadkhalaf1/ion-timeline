import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WurmTestPage } from './wurm-test.page';

describe('WurmTestPage', () => {
  let component: WurmTestPage;
  let fixture: ComponentFixture<WurmTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WurmTestPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WurmTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
