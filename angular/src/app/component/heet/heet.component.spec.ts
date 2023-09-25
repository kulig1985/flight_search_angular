import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeetComponent } from './heet.component';

describe('HeetComponent', () => {
  let component: HeetComponent;
  let fixture: ComponentFixture<HeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
