import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pr10VisorPartidasComponentsComponent } from './pr10-visor-partidas-components.component';

describe('Pr10VisorPartidasComponentsComponent', () => {
  let component: Pr10VisorPartidasComponentsComponent;
  let fixture: ComponentFixture<Pr10VisorPartidasComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pr10VisorPartidasComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pr10VisorPartidasComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
