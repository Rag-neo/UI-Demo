import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDonutChartModule } from 'ngx-doughnut-chart';
import { NgxGaugeModule } from 'ngx-gauge';
import { GoogleChartsModule } from 'angular-google-charts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    NgxDonutChartModule,
    NgxGaugeModule,
    GoogleChartsModule,
    NgxDatatableModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCxxWUuhEoR0L-UBBQ640GvEURvW4Buevo'
    // })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
