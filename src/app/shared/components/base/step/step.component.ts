import { Component, HostBinding, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { StepsService } from '@services/steps/steps.service';
import { StepType } from '@enums/ui.enum';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent implements OnInit {
  @Input() currentStep: number = 1;
  @Input() type: StepType = StepType.Full;
  @Input() count!: number;

  @Input() steps: any = [
    { name: 'step.khoi_tao' },
    { name: 'step.xac_nhan' },
    { name: 'step.xac_thuc' },
    { name: 'step.ket_qua' },
  ];

  STEP_TYPE = StepType;

  @HostBinding('class') get hostClass() {
    return this.initClass();
  }

  initClass() {
    let classs = [`app-steps-wrap app-steps-${this.type}`];
    if (this.steps.length > 3) classs.push('steps-more-3-wrap');
    return classs.join(' ');
  }

  private stepService = inject(StepsService);

  ngOnInit() {
    this.stepService.initCount(this.count || this.steps.length);
  }
}
