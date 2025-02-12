import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pr13GatosComponent } from './pr13-gatos.component';

describe('Pr13GatosComponent', () => {
  let component: Pr13GatosComponent;
  let fixture: ComponentFixture<Pr13GatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pr13GatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pr13GatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
