import { Component, OnInit } from '@angular/core';
import {Weather} from '../../models/weather';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  weatherItems: Weather[];

  constructor(private ws: WeatherService) { }

  ngOnInit() {
  }

  getWeatherItems(): void {
    this.weatherItems = this.ws.getWeatherItems();
  }

}
