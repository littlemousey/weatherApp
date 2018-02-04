import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface CityData {
    cityName : string;
    coord : {
        lat : number;
        lon : number;
};
}

export interface WeatherData {
    city: CityData;
}


@Injectable()
export class WeatherDataService {
    apiKey : string = '48db517a532358c9a1da95caa9db3a2c';

    constructor(private http: HttpClient) { }

    configUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=2747350&APPID=' + this.apiKey;

    getConfig() {
        return this.http.get<WeatherData>(this.configUrl);
    }

}
