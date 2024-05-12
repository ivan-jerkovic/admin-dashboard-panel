import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Bell,
  Calendar,
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudOff,
  CloudRain,
  CloudSnow,
  Settings,
  Sun,
  Truck,
} from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';

const icons = {
  Bell,
  Settings,
  Sun,
  Cloud,
  CloudDrizzle,
  CloudLightning,
  CloudOff,
  CloudRain,
  CloudSnow,
  Calendar,
  Truck,
};

@NgModule({
  declarations: [],
  imports: [CommonModule, FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
