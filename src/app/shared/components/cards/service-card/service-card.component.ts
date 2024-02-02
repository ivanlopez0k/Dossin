import { Component, Input, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {
  @Input() cardInfo: any;
  isHovered = false;

  constructor(private el: ElementRef) {}

  @HostListener('touchstart') onTouchStart() {
    this.isHovered = !this.isHovered;
  }

  private isTouchDevice(): boolean {
    return 'ontouchstart' in window || window.matchMedia('(hover: none)').matches;
}

}
