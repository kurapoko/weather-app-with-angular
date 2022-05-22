import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {


  iconUrl: string | undefined;

  /** 都市名 */
  @Input() city?: string;
  /** 現在気温 */
  @Input() temp?: string;
  /** 最高気温 */
  @Input() maxTemp?: string;
  /** 最低気温 */
  @Input() minTemp?: string;
  /** アイコン */
  @Input() icon?: string;

  constructor() { }

  ngOnInit(): void {
    this.getIconUrl();
  }

  /**
   * 天気のアイコンURLを取得する。
   */
  getIconUrl() {
    this.iconUrl = `http://openweathermap.org/img/wn/${this.icon}@2x.png`
  }
}
