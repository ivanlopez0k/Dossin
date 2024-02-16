import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadorDeCargaComponent } from './dador-de-carga.component';

describe('DadorDeCargaComponent', () => {
  let component: DadorDeCargaComponent;
  let fixture: ComponentFixture<DadorDeCargaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadorDeCargaComponent]
    });
    fixture = TestBed.createComponent(DadorDeCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
