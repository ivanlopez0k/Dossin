import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardsContainerComponent } from './blog-cards-container.component';

describe('BlogCardsContainerComponent', () => {
  let component: BlogCardsContainerComponent;
  let fixture: ComponentFixture<BlogCardsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogCardsContainerComponent]
    });
    fixture = TestBed.createComponent(BlogCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
