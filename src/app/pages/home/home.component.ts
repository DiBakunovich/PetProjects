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
      src: './assets/photo/home2.jpg',
      title: 'Домик',
      subtitle: 'Внешний вид домика',
    };
    this.slides[1] = {
      id: 1,
      src: './assets/photo/home12_1.jpg',
      title: 'Домик',
      subtitle: 'Вид со стороны веранды',
    };
    this.slides[2] = {
      id: 2,
      src: './assets/photo/home12_3.jpg',
      title: 'Домик',
      subtitle: 'Зона "кухни"',
    };
    this.slides[3] = {
      id: 3,
      src: './assets/photo/vip.jpg',
      title: 'Вип-домик',
      subtitle: 'Внешний вид домика',
    };
    this.slides[4] = {
      id: 4,
      src: './assets/photo/vip1_1.jpg',
      title: 'Вип-домик',
      subtitle: 'Вид со стороны веранды',
    };
    this.slides[5] = {
      id: 5,
      src: './assets/photo/vip1_2.jpg',
      title: 'Вип-домик',
      subtitle: 'Вид из домика',
    };
    this.slides[6] = {
      id: 6,
      src: './assets/photo/vip1_3.jpg',
      title: 'Вип-домик',
      subtitle: 'Спальня',
    };
    this.slides[7] = {
      id: 7,
      src: './assets/photo/vip1_4.jpg',
      title: 'Вип-домик',
      subtitle: 'Уборная',
    };
    this.slides[8] = {
      id: 8,
      src: './assets/photo/vip1_5.jpg',
      title: 'Вип-домик',
      subtitle: 'Веранда на 2-ом этаже',
    };
    this.slides[9] = {
      id: 9,
      src: './assets/photo/pt13.jpg',
      title: 'Фото от посетителей',
      subtitle: '',
    };
    this.slides[10] = {
      id: 10,
      src: './assets/photo/pt1.jpg',
      title: 'Фото от посетителей',
      subtitle: '',
    };
    this.slides[11] = {
      id: 11,
      src: './assets/photo/pt2.jpg',
      title: 'Фото от посетителей',
      subtitle: '',
    };
    this.slides[12] = {
      id: 12,
      src: './assets/photo/pt3.jpg',
      title: 'Фото от посетителей',
      subtitle: '',
    };
    this.slides[13] = {
      id: 13,
      src: './assets/photo/pt4.jpg',
      title: 'Фото от посетителей',
      subtitle: '',
    };
    this.slides[14] = {
      id: 14,
      src: './assets/photo/pt5.jpg',
      title: 'Фото от посетителей',
      subtitle: '',
    };
    this.slides[15] = {
      id: 15,
      src: './assets/photo/pt6.jpg',
      title: 'Фото от посетителей',
      subtitle: '',
    };
    this.slides[16] = {
      id: 16,
      src: './assets/photo/pt7.jpg',
      title: 'Фото от посетителей',
      subtitle: '',
    };
    this.slides[17] = {
      id: 17,
      src: './assets/photo/pt8.jpg',
      title: 'Фото от посетителей',
      subtitle: '',
    };
    this.slides[18] = {
      id: 18,
      src: './assets/photo/pt9.jpg',
      title: 'Фото от посетителей',
      subtitle: '',
    };
    this.slides[19] = {
      id: 19,
      src: './assets/photo/pt10.jpg',
      title: 'Фото от посетителей',
      subtitle: '',
    };
    this.slides[20] = {
      id: 20,
      src: './assets/photo/pt11.jpg',
      title: 'Фото от посетителей',
      subtitle: '',
    };
    this.slides[21] = {
      id: 21,
      src: './assets/photo/pt12.jpg',
      title: 'Фото от посетителей',
      subtitle: '',
    };
    this.slides[22] = {
      id: 22,
      src: './assets/photo/pt13.jpg',
      title: 'Фото от посетителей',
      subtitle: '',
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
