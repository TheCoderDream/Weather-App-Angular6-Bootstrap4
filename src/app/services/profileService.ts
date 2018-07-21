import {Injectable} from '@angular/core';
import {Profile} from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: Profile[] = [
    {profileName: '1', city: 'Ankara'},
    {profileName: '2', city: 'istanbul'},
    {profileName: '3', city: 'izmir'}
  ];

  saveNewProfile(profile: Profile) {
    return this.profiles.push(profile);
  }

  getProfiles() {
    return this.profiles;
  }

  deleteProfile(profile: Profile) {
    this.profiles.splice(this.profiles.indexOf(profile), 1);
  }

}
