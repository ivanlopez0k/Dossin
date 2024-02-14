import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  implements OnInit {
  currentYear: number = new Date().getFullYear();
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getCurrentYear();
  }

  getCurrentYear(): void {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
  }

  navigateToSection(page: string, sectionId: string): void {
    this.router.navigate([page]).then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -150;
          window.scrollTo({ top: element.offsetTop + yOffset, behavior: 'smooth' });
        }
      }, 100);
    });
  }

}
