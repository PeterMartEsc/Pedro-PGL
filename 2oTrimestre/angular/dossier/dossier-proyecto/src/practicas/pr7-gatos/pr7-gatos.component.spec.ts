import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pr7GatosComponent } from './pr7-gatos.component';

describe('Pr7GatosComponent', () => {
  let component: Pr7GatosComponent;
  let fixture: ComponentFixture<Pr7GatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pr7GatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pr7GatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
