import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MandateDetailsService} from './MandateDetailsService.service';
import { ReactiveFormsModule } from '@angular/forms';   

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MandateDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
