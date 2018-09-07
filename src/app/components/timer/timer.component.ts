import { Component, OnInit } from '@angular/core';
declare var moment: any;

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  timerDays;
  timerHours;
  timerMinutes;
  timerSeconds;
  constructor() { }
  ngOnInit() {
    setInterval(() => {
      const marriageDate = moment('Fri Dec 18 2018 15:21:00 GMT-0400 (Indian Standard Time)');
      const now = moment(new Date());
      this.timerDays  = marriageDate.diff(now, 'days');
      const computeHours = moment(now).add(this.timerDays, 'days');
      this.timerHours  = marriageDate.diff(computeHours, 'hours');
      const computeMinutes = moment(now).add(this.timerDays, 'days').add(this.timerHours, 'hours');
      this.timerMinutes  = marriageDate.diff(computeMinutes, 'minutes');
      const computeSeconds = moment(now).add(this.timerDays, 'days').add(this.timerHours, 'hours').add(this.timerMinutes, 'minutes');
      this.timerSeconds  = marriageDate.diff(computeSeconds, 'seconds');
    }, 1000);
  }

}
