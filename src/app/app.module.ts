import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { TheWeddingComponent } from './components/the-wedding/the-wedding.component';
import { GettingThereComponent } from './components/getting-there/getting-there.component';
import {AppRoutingModule} from './app.routing';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OurStoryComponent,
    TheWeddingComponent,
    GettingThereComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
