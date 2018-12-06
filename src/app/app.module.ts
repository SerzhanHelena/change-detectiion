import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default/default.component';
import { PushComponent } from './components/push/push.component';
import { AddComponent } from './components/add/add.component';
import { MainComponent } from './components/main/main.component';
import { DetectionComponent } from './components/detection/detection.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    PushComponent,
    AddComponent,
    MainComponent,
    DetectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
