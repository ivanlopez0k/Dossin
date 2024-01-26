import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-cards-container',
  templateUrl: './blog-cards-container.component.html',
  styleUrls: ['./blog-cards-container.component.scss']
})
export class BlogCardsContainerComponent {
  @Input() blogs: any[] = [];
}
