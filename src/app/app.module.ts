import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { HttpUtilService } from "app/providers/http-util.service";
import { HttpEndPointsService } from "app/providers/http-end-points.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpEndPointsService, HttpUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
