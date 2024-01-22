import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriasComponent } from './industrias.component';

describe('IndustriasComponent', () => {
  let component: IndustriasComponent;
  let fixture: ComponentFixture<IndustriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustriasComponent]
    });
    fixture = TestBed.createComponent(IndustriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
