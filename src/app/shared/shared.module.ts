import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [HeaderComponent, NavigationComponent, FooterComponent, SliderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, SliderComponent],
})
export class SharedModule {}
