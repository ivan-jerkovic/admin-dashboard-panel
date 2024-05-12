import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetWeatherDataResponseDto } from '../../types/weather.types';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss', '../card/card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  public constructor(private http: HttpClient) {}

  weather: any;
  weatherUrl =
    'https://api.open-meteo.com/v1/forecast?latitude=44.8169&longitude=15.8708&current=temperature_2m,weather_code';

  ngOnInit(): void {
    this.getWeatherData(this.weatherUrl);
  }

  getWeatherData(url: string): GetWeatherDataResponseDto {
    this.http.get(url).subscribe((data) => {
      let type = '';
      let icon = '';

      switch ((data as any).current.weather_code) {
        case 0:
        case 1:
          type = 'Sunny';
          icon = 'sun';
          break;
        case 2:
        case 3:
        case 45:
        case 48:
          type = 'Cloudy';
          icon = 'cloud';
          break;
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
          type = 'Drizzling';
          icon = 'cloud-drizzle';
          break;
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
        case 80:
        case 81:
        case 82:
          type = 'Raining';
          icon = 'cloud-rain';
          break;
        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
          type = 'Snowing';
          icon = 'cloud-snow';
          break;
        case 95:
        case 96:
        case 99:
          type = 'Thunderstorm';
          icon = 'cloud-lightning';
          break;
        default:
          type = 'No data';
          icon = 'cloud-off';
          break;
      }

      this.weather = {
        temperature: (data as any).current.temperature_2m,
        type,
        icon,
      };
    });

    return this.weather;
  }
}
