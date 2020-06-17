import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { employeeListComponent } from './employee-list.component';

describe('employeeListComponent', () => {
  let component: employeeListComponent;
  let fixture: ComponentFixture<employeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ employeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(employeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
