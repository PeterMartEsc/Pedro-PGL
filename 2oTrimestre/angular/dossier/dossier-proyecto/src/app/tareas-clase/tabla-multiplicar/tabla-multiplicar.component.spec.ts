import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMultiplicarComponent } from './tabla-multiplicar.component';

describe('TablaMultiplicarComponent', () => {
  let component: TablaMultiplicarComponent;
  let fixture: ComponentFixture<TablaMultiplicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaMultiplicarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaMultiplicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
