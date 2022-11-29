import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(countryName: string){
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Algeria&APPID=794ee95e63c5a32aaf88cd813fa2e425')
  }
}
