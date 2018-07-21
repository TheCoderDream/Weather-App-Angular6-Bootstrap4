import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import {AppRouting} from './app-routing';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import {HttpClientModule} from '@angular/common/http';
import {WeatherService} from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SidebarComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [ WeatherService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
