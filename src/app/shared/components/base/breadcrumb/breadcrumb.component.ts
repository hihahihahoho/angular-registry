import { CommonModule } from '@angular/common';
import { Component, HostBinding, inject, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownItemComponent } from '@components/base/dropdown-item/dropdown-item.component';
import { MainRoute } from '@enums/route.enum';
import { TranslateModule } from '@ngx-translate/core';
import {
  BreadcrumbService,
  IBreadcrumb,
} from '@services/breadcrumb/breadcrumb.service';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { SvgInlineComponent } from '../svg-inline/svg-inline.component';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    DropdownItemComponent,
    NzDropDownModule,
    SvgInlineComponent
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  @HostBinding('class.app-breadcrumb') wrap = true;
  @Input() LENGTH_MAX_SHOW_ALL: number = 3;
  private breadcrumbService = inject(BreadcrumbService);
  breadcrumbs!: IBreadcrumb[];
  MainRoute = MainRoute;

  HomeBread = {
    url: MainRoute.Home,
  };

  ngOnInit(): void {
    this.breadcrumbService.getBreadcrumb().subscribe((data) => {
      this.breadcrumbs = data;
    });
  }
}
