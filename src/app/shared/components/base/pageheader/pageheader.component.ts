import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  HostBinding,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbComponent } from '@components_base/breadcrumb/breadcrumb.component';
import { Language } from '@enums/Common/common.enum';
import { AnySafeType } from '@enums/Type/type.enum';
import { IBreadcrumb } from '@services/breadCrumb/breadcrumb.service';
import { CommonService } from '@services/Common/common.service';
import { TranslationService } from '@services/Translation/translation.service';
import { UI } from '@services/UI/ui.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-pageheader',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.scss'],
})
export class PageheaderComponent implements OnInit, AfterContentInit {
  @HostBinding('class.app-pageheader') page = true;
  @Input() back: boolean = false;
  @Input() backIcon: string = 'media/icons/outline/arrow-left.svg';
  @Input() backUrl!: string;
  @Input() breadcrumb: boolean = true;
  @Input() customBreadcrumbLast!: IBreadcrumb;
  @Input() customPageTitle!: { name: string; nameEn: string };

  private activatedRoute = inject(ActivatedRoute);
  private translationService = inject(TranslationService);
  private commonService = inject(CommonService);
  private titleService = inject(Title);
  private router = inject(Router);

  readonly UI = inject(UI);

  LANGUAGE = Language;

  pageTitle!: { name: string; nameEn: string };
  lang$!: Observable<AnySafeType>;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.pageTitle = data['pageTitle'];
    });

    this.lang$ = this.translationService.getLang();

    this.lang$.subscribe((data) => {
      data === Language.Vi
        ? this.titleService.setTitle(this.pageTitle.name)
        : this.titleService.setTitle(this.pageTitle.nameEn);
    });
  }

  ngAfterContentInit(): void {
    if (this.customPageTitle) this.pageTitle = this.customPageTitle;
  }

  onBack() {
    if (this.backUrl) this.router.navigateByUrl(this.backUrl);
    else this.commonService.historyBack();
  }
}
