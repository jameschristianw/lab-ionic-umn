import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkmModalComponent } from './ukm-modal.component';

describe('UkmModalComponent', () => {
  let component: UkmModalComponent;
  let fixture: ComponentFixture<UkmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkmModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
