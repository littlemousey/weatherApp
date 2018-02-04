import { Component, OnInit } from '@angular/core';
import { WeatherData, WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-config-data',
  templateUrl: './config-data.component.html',
  styleUrls: ['./config-data.component.css']
})
export class ConfigDataComponent implements OnInit {
  weather: WeatherData | undefined;

  constructor(private weatherService: WeatherDataService) { }

  ngOnInit() {
    this.weatherService.getConfig().subscribe( (response) => this.weather = response);
  }

  get lat() {
      return this.weather.city.coord.lat;
  }

  get lon() {
      return this.weather.city.coord.lon;
  }

  get name()  {
      return this.weather.city.cityName;
  }
}

