import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JlgImageModule } from 'projects/jlg-image/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JlgImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
