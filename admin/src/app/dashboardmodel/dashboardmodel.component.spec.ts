import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmodelComponent } from './dashboardmodel.component';

describe('DashboardmodelComponent', () => {
  let component: DashboardmodelComponent;
  let fixture: ComponentFixture<DashboardmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
