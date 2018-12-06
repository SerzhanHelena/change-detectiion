import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges}
  from '@angular/core';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushComponent implements OnInit, OnChanges {
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

  constructor() { }
}
