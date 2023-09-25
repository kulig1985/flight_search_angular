import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTreeComponent } from './flight-tree.component';

describe('FlightTreeComponent', () => {
  let component: FlightTreeComponent;
  let fixture: ComponentFixture<FlightTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
