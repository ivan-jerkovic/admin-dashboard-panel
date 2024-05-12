import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { CalendarCardComponent } from './components/calendar-card/calendar-card.component';
import { CarStatisticsCardComponent } from './components/car-statistics-card/car-statistics-card.component';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { IconsModule } from './icons/icons.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    WeatherCardComponent,
    CalendarCardComponent,
    CarStatisticsCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IconsModule,
    MatDatepickerModule,
    MatCardModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideNativeDateAdapter(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
