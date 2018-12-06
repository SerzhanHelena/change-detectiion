import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit,OnChanges {

  @Input() addedValue: number;
  time = 1111;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.time > 0) {
        this.time++;
      } else {
        this.time = 1111;
      }
    }, 1000);
  }

  ngOnInit() {
    this.startTimer();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.addedValue) {
      this.time += this.addedValue;
    }
  }
}
