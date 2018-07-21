import {Component, Input, OnInit} from '@angular/core';
import {Weather} from '../../models/weather';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  @Input('item') weatherItem: Weather;

  constructor() { }

  ngOnInit() {
  }

}
