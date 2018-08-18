import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadXlsComponent } from './read-xls.component';

describe('ReadXlsComponent', () => {
  let component: ReadXlsComponent;
  let fixture: ComponentFixture<ReadXlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadXlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadXlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
