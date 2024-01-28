import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselClientesComponent } from './carrousel-clientes.component';

describe('CarrouselClientesComponent', () => {
  let component: CarrouselClientesComponent;
  let fixture: ComponentFixture<CarrouselClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrouselClientesComponent]
    });
    fixture = TestBed.createComponent(CarrouselClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
