import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
  apikey = '&apikey=acc2caec8e1294a40424dde232848027';

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    return this.http.get(this.baseUrl + city + this.apikey);
  }
}
