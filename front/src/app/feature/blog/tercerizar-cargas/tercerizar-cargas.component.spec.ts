import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerizarCargasComponent } from './tercerizar-cargas.component';

describe('TercerizarCargasComponent', () => {
  let component: TercerizarCargasComponent;
  let fixture: ComponentFixture<TercerizarCargasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TercerizarCargasComponent]
    });
    fixture = TestBed.createComponent(TercerizarCargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
