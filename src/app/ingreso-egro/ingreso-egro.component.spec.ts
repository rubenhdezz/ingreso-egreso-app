import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoEgroComponent } from './ingreso-egro.component';

describe('IngresoEgroComponent', () => {
  let component: IngresoEgroComponent;
  let fixture: ComponentFixture<IngresoEgroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoEgroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoEgroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
