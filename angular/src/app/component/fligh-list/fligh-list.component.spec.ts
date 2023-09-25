import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlighListComponent } from './fligh-list.component';

describe('FlighListComponent', () => {
  let component: FlighListComponent;
  let fixture: ComponentFixture<FlighListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlighListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlighListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
