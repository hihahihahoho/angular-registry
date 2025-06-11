import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DropdownItemComponent } from '@components/base/dropdown-item/dropdown-item.component';
import { TranslateModule } from '@ngx-translate/core';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { of } from 'rxjs';
import { SvgInlineComponent } from '../svg-inline/svg-inline.component';
import { BreadcrumbComponent } from './breadcrumb.component';

const mockActivatedRoute = {
  snapshot: {
    url: ['/'],
    params: {},
    queryParams: {},
    data: {},
  },
  params: of({}),
  queryParams: of({}),
  data: of({}),
};

const mockRouter = {
  navigate: () => Promise.resolve(true),
  events: of({}),
  url: '/',
};

const meta: Meta<BreadcrumbComponent> = {
  title: 'CONTROLS/Breadcrumb',
  component: BreadcrumbComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        DropdownItemComponent,
        NzDropDownModule,
        SvgInlineComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter }
      ]
    })
  ],
  argTypes: {
    LENGTH_MAX_SHOW_ALL: {
      control: 'number',
      description: 'Maximum number of breadcrumbs to show before collapsing',
    },
  },
};

export default meta;
type Story = StoryObj<BreadcrumbComponent>;

export const Default: Story = {
  args: {
    LENGTH_MAX_SHOW_ALL: 3,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-breadcrumb [LENGTH_MAX_SHOW_ALL]="LENGTH_MAX_SHOW_ALL"></app-breadcrumb>
    `,
  }),
};

export const ShowAll: Story = {
  args: {
    LENGTH_MAX_SHOW_ALL: 5,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-breadcrumb [LENGTH_MAX_SHOW_ALL]="LENGTH_MAX_SHOW_ALL"></app-breadcrumb>
    `,
  }),
};
