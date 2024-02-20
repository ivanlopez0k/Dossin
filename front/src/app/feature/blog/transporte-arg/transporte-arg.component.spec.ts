import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteArgComponent } from './transporte-arg.component';

describe('TransporteArgComponent', () => {
  let component: TransporteArgComponent;
  let fixture: ComponentFixture<TransporteArgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransporteArgComponent]
    });
    fixture = TestBed.createComponent(TransporteArgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
