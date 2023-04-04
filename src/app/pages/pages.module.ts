import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { CarouselModule } from '@coreui/angular';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularYandexMapsModule,
    CarouselModule,
  ],
})
export class PagesModule {}
