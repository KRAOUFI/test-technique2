import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-technique2';
  weatherToShow: any;

  constructor(public weather: WeatherService) {}

  ngOnInit(): void {

  }

  getWeather() {
    this.weather.getWeather('paris').subscribe(result => {
      this.weatherToShow = result;
    });
  }
}
