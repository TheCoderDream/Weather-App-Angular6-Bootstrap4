import { Component, OnInit } from '@angular/core';
import { Profile} from '../../models/profile';
import { ProfileService} from '../../services/profileService';
import {WeatherService} from '../../services/weather.service';
import {Weather} from '../../models/weather';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  profiles: Profile[];
  weatherItem: Weather;
  newProfile: Profile = {
    profileName: '',
    city: ''
  };
  constructor(private profileService: ProfileService, private ws: WeatherService) {

  }

  ngOnInit() {
    this.profiles = this.getProfiles();
  }

  getProfiles() {
    return this.profileService.getProfiles();
  }

  onSaveNew() {
    const profileItem: Profile = {
      profileName: this.newProfile.profileName,
      city: this.newProfile.city
    };
    this.saveProfile(profileItem);
  }

  saveProfile(profileItem: Profile) {
    this.profileService.saveNewProfile(profileItem);
    this.newProfile.profileName = '';
    this.newProfile.city = '';
  }

  onLoadProfile(profile: Profile) {
    this.ws.searchWeatherData(profile.city).subscribe(data => this.weatherItem = data);
  }

  onDeleteProfile(event: Event, profile: Profile) {
    event.stopPropagation();
    this.profileService.deleteProfile(profile);
  }

}
