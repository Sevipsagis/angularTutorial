import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsDetailComponent } from './operators-detail.component';

describe('OperatorsDetailComponent', () => {
  let component: OperatorsDetailComponent;
  let fixture: ComponentFixture<OperatorsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
