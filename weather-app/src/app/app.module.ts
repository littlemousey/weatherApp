import { createInput } from '@angular/compiler/src/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConfigDataComponent } from './config-data/config-data.component';
import { GoogleMapComponent} from './google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { WeatherDataService } from './weather-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ConfigDataComponent,
    GoogleMapComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyCNFLengF8LTcum33MMn_Fcbc59fZoMLME'
      })
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
