import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '../../types/http.types';
import { GetColoredCarsResponseDto } from '../../types/colored-cars.types';
import { baseUrl } from '../../config/constants';

@Component({
  selector: 'app-car-statistics-card',
  templateUrl: './car-statistics-card.component.html',
  styleUrls: [
    './car-statistics-card.component.scss',
    '../card/card.component.scss',
  ],
})
export class CarStatisticsCardComponent implements OnInit {
  public constructor(
    private http: HttpClient,
    private sharedService: SharedService
  ) {}

  getColoredCars: Subscription | undefined;
  coloredCars: any;

  ngOnInit(): void {
    this.coloredCars = this.getColoredCarsByDate(
      new Date().toISOString().split('T')[0]
    );
    this.getColoredCars = this.sharedService.selectedDate.subscribe((date) => {
      this.getColoredCarsByDate(date);
    });
  }

  getColoredCarsByDate(date: string) {
    this.coloredCars = [];

    this.http
      .get<HttpResponse<GetColoredCarsResponseDto[]>>(
        `${baseUrl}colored-cars/?date=${date}`
      )
      .subscribe((data) => {
        for (const item of data.payload) {
          item.color = item.color.charAt(0).toUpperCase() + item.color.slice(1);
          this.coloredCars.push(item);
        }
      });

    return this.coloredCars;
  }
}
