import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pr8PiedraPapelTijeraComponent } from './pr8-piedra-papel-tijera.component';

describe('Pr8PiedraPapelTijeraComponent', () => {
  let component: Pr8PiedraPapelTijeraComponent;
  let fixture: ComponentFixture<Pr8PiedraPapelTijeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pr8PiedraPapelTijeraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pr8PiedraPapelTijeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
