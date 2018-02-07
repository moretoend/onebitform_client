import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'ng2-materialize';
import { ColorPickerModule } from 'ngx-color-picker';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule.forRoot(),
    ColorPickerModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
