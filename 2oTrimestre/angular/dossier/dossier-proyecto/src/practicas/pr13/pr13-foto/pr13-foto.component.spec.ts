import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pr13FotoComponent } from './pr13-foto.component';

describe('Pr13FotoComponent', () => {
  let component: Pr13FotoComponent;
  let fixture: ComponentFixture<Pr13FotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pr13FotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pr13FotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
