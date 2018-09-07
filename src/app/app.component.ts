import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sai-web';
  /**
   * Moves the view to the page user clicks on.
   */
  goTo(pageCd: string) {
    const ourStory = document.getElementById(pageCd);
    ourStory.scrollIntoView({behavior: 'smooth'});
  }
}
