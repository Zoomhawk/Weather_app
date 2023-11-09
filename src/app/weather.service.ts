import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getweather(city: string, units: string, first_name:string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=794ee95e63c5a32aaf88cd813fa2e425&units=' + units);
  }
  getCountry(country: string) {
    return this.http.get('https://countriesnow.space/api/v0.1/countries');
  }
 
}

