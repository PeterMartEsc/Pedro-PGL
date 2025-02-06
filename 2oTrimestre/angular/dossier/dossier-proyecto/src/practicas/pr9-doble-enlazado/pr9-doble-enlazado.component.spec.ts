import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pr9DobleEnlazadoComponent } from './pr9-doble-enlazado.component';

describe('Pr9DobleEnlazadoComponent', () => {
  let component: Pr9DobleEnlazadoComponent;
  let fixture: ComponentFixture<Pr9DobleEnlazadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pr9DobleEnlazadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pr9DobleEnlazadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
