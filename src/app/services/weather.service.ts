import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {WEATHER_ITEMS} from '../data/weather.data';
import {Observable} from 'rxjs';
import {Weather} from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
  weatherApiKey = '652bff1ffb20b679163acf9acec46704';
  imp = '&units=imperial';

  constructor(private http: HttpClient) { }

  getWeatherItems() {
    return WEATHER_ITEMS;
  }

  addWeatherItems(weatherItem) {
    WEATHER_ITEMS.push(weatherItem);
  }

  searchWeatherData(cityName: string): Observable<Weather> {
    return this.http.get(`${this.apiUrl}${cityName}&APPID=${this.weatherApiKey}${this.imp}`).pipe(
      tap((a) => console.log(a))
      ) as Observable<Weather> ;
  }
}
