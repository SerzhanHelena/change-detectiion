import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges}
  from '@angular/core';

@Component({
  selector: 'app-detection',
  templateUrl: './detection.component.html',
  styleUrls: ['./detection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectionComponent implements OnInit, OnChanges {

  @Input() addedValue: number;
  time = 1111;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.time > 0) {
        this.time++;
        this.cd.detectChanges();
      } else {
        this.time = 1111;
      }
    }, 1000);
  }

  ngOnInit() {
    this.startTimer();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.addedValue) {
      this.time += this.addedValue;
      this.cd.detectChanges();
    }
  }

  constructor(private cd: ChangeDetectorRef) { }
}
