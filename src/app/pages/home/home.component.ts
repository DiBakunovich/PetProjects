import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentSection = 'home';

  slides: any[] = new Array(13).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './assets/photo/home.webp',
    };
    this.slides[1] = {
      id: 1,
      src: './assets/photo/home2.webp',
    };
    this.slides[2] = {
      id: 2,
      src: './assets/photo/sauna.webp',
    };
    this.slides[3] = {
      id: 3,
      src: './assets/photo/pt1.jpg',
    };
    this.slides[4] = {
      id: 4,
      src: './assets/photo/pt2.jpg',
    };
    this.slides[5] = {
      id: 5,
      src: './assets/photo/pt3.jpg',
    };
    this.slides[6] = {
      id: 6,
      src: './assets/photo/pt4.jpg',
    };
    this.slides[7] = {
      id: 7,
      src: './assets/photo/pt5.jpg',
    };
    this.slides[8] = {
      id: 8,
      src: './assets/photo/pt6.jpg',
    };
    this.slides[9] = {
      id: 9,
      src: './assets/photo/pt7.jpg',
    };
    this.slides[10] = {
      id: 10,
      src: './assets/photo/pt8.jpg',
    };
    this.slides[11] = {
      id: 11,
      src: './assets/photo/pt9.jpg',
    };
    this.slides[12] = {
      id: 12,
      src: './assets/photo/pt10.jpg',
    };
    this.slides[13] = {
      id: 13,
      src: './assets/photo/pt11.jpg',
    };
  }

  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbar?.classList.add('nav-sticky');
    } else {
      navbar?.classList.remove('nav-sticky');
    }
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  toggleMenu() {
    document.getElementById('navbarCollapse')?.classList.toggle('show');
  }
}
