import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements AfterViewInit {
  currentIndex = 0;
  totalItems = 5; // Adjust based on the actual number of items
  itemIndexes = Array.from({ length: this.totalItems }, (_, i) => i);
  autoSlideInterval: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Safe to access the DOM
      this.updateCarousel(this.currentIndex);

      // Auto-slide every 3 seconds
      this.startAutoSlide();
    }
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  updateCarousel(index: number) {
    if (!isPlatformBrowser(this.platformId)) return;

    const items = document.querySelectorAll('.g-item');
    const dots = document.querySelectorAll('.dot');

    items.forEach((item, i) => {
      item.classList.remove('g-item1', 'g-item2', 'g-item3', 'g-item4', 'g-item5');
      const newIndex = (i + index) % this.totalItems;

      if (newIndex === 0) item.classList.add('g-item1');
      else if (newIndex === 1) item.classList.add('g-item2');
      else if (newIndex === 2) item.classList.add('g-item3');
      else if (newIndex === 3) item.classList.add('g-item4');
      else if (newIndex === 4) item.classList.add('g-item5');
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  nextSlide() {
    this.stopAutoSlide();
    this.currentIndex = (this.currentIndex + 1) % this.totalItems;
    this.updateCarousel(this.currentIndex);
    this.startAutoSlide();
  }

  prevSlide() {
    this.stopAutoSlide();
    this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
    this.updateCarousel(this.currentIndex);
    this.startAutoSlide();
  }
}
