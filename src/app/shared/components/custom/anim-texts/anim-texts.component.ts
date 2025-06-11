import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-anim-texts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anim-texts.component.html',
  styleUrl: './anim-texts.component.scss',
  animations: [
    trigger('textRotateUp', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(100%) rotateX(-90deg)',
          transformOrigin: 'center bottom'
        }),
        animate('200ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0%) rotateX(0deg)'
        }))
      ]),
      transition(':leave', [
        style({
          transformOrigin: 'center top'
        }),
        animate('200ms ease-in', style({
          opacity: 0,
          transform: 'translateY(-100%) rotateX(90deg)'
        }))
      ])
    ])
  ]
})
export class AnimTextsComponent implements OnInit, OnDestroy {
  @Input() texts: string[] = [
    "Ngân hàng",
    "Số tài khoản",
    "Mẫu chuyển tiền",
    "Danh bạ chuyển tiền",
  ];
  currentIndex: number = 0;
  currentTextArray: string[] = [];

  private intervalId: any;

  ngOnInit(): void {
    this.updateCurrentText();
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      this.updateCurrentText();
    }, 2000);
  }

  updateCurrentText(): void {

    this.currentTextArray = [this.texts[this.currentIndex]];
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
