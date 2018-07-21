import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import { FormControl} from '@angular/forms';
import {Weather} from '../../models/weather';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  city: any = {};
  searchInput: FormControl = new FormControl();

  constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.searchInput.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((input: any) => {
        return this.ws.searchWeatherData(input);
      })
    ).subscribe(city => this.city = city);
  }

  onSubmit(): void {
    const weatherItem = {
      cityName: this.city.name,
      description: this.city.weather[0].description,
      temperature: this.city.temp
    };
  }
  addWeatherItem(item: Weather) {
    this.ws.addWeatherItems(item);
    this.searchInput.reset();
  }

}
