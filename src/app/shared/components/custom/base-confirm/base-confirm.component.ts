import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { AccordionComponent } from '@components/base/accordion/accordion.component';
import { AlertComponent } from '@components/base/alert/alert.component';
import { AuthMethodComponent } from '@components/base/auth-method/auth-method.component';
import { ButtonComponent } from '@components/base/Button/button.component';
import { SvgInlineComponent } from '@components/base/svgInline/svg-inline.component';
import { CCY } from '@enums/CCY/ccy.enum';
import { Language } from '@enums/Common/common.enum';
import { CapitalizeFirstCharPipe } from '@pipes/capitalize-first-char/capitalize-first-char.pipe';
import { NumberToTextPipe } from '@pipes/numberToText/number-to-text.pipe';
import { StepsService } from '@services/Steps/steps.service';
import { TranslationService } from '@services/Translation/translation.service';
import { UI } from '@services/UI/ui.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base-confirm',
  imports: [AlertComponent, ButtonComponent, SvgInlineComponent, CommonModule, NumberToTextPipe, CapitalizeFirstCharPipe, AuthMethodComponent, AccordionComponent],
  templateUrl: './base-confirm.component.html',
  styleUrl: './base-confirm.component.scss'
})
export class BaseConfirmComponent {
  @Input() amount!: number
  @Input() amountCcy: CCY = CCY.VND;
  @Input() authCheck = true;
  private stepService = inject(StepsService);
  private translationService = inject(TranslationService);
  readonly UI = inject(UI);
  language$!: Observable<Language>;
  step$: Observable<number> = this.stepService.getStep();
  step!: number

  ngOnInit() {
    this.step$.subscribe((value) => {
      console.log('value')
      this.step = value
    })
  }

  ngOnChanges(): void {
    this.language$ = this.translationService.getLang();
  }

  handleBack() {
    this.stepService.prev();
  }

  handleNext() {
    this.stepService.next();
  }
}
