import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../service/weather.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weather: any;

  constructor( public weatherService: WeatherService ) { }

  ngOnInit(): void {
    this.weatherService.getWhetherByCityName('london').subscribe((weather) => {
      this.weather = weather;
    });
  }
}
