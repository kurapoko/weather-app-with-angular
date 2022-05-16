import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  weather:any;

  constructor( public weatherService: WeatherService ) { }

  ngOnInit(): void {
    this.weatherService.getWhether().subscribe(
      response => this.weather = response
    );

    this.weatherService.getCurrentTemp('london');
  }

  ngAfterViewChecked() {
    // console.log(this.weather$);
  }
}
