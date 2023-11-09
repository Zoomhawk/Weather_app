import { WeatherService} from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  myWeather: any;
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = '';
  iconURL: string = '';
  iconURL2 : string='';
  city: string = 'Dubai';
  first_name:string='delhi';
  //units: string = 'metric'
  units: string = 'imperial'
   
  getValues(val:string){
    this.city=val;
  }
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
    // this.getCountry();
  }

 
  getWeather() {
    this.weatherService.getweather(this.city, this.units,this.first_name).subscribe({

      next: (res) => {
        console.log(res);
        this.myWeather = res;
        this.temperature = this.myWeather.main.temp;
        this.feelsLikeTemp = this.myWeather.main.feels_like;
        this.humidity = this.myWeather.main.humidity;
        this.pressure = this.myWeather.main.pressure;
        this.summary = this.myWeather.weather[0].main;

        this.iconURL = this.myWeather.weather[0].description;
        this.iconURL2 =`http://openweathermap.org/img/w/${this.myWeather.weather[0].icon}.png`
      },

      error: (error) => console.log(error.message),

      complete: () => console.info('API call completed')
    })
  }


  onRadioButtonChange() {
    if (this.units == 'imperial') {
      this.units = 'metric';
    } else {
      this.units = 'imperial';
    }

    this.getWeather();
  }
  
}
