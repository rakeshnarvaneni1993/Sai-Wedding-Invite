import { GettingThereComponent } from './components/getting-there/getting-there.component';
import { TheWeddingComponent } from './components/the-wedding/the-wedding.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { FrontPageComponent } from './components/front-page/front-page.component';
const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component : HomePageComponent},
  { path: 'our-story', component : OurStoryComponent},
  { path: 'the-wedding', component : TheWeddingComponent},
  { path: 'getting-there', component : GettingThereComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
