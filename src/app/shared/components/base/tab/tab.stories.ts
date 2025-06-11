import { CommonModule } from '@angular/common';
import { TabSize, TabTheme, TabType } from '@enums/ui.enum';
import { TranslateModule } from '@ngx-translate/core';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TabComponent } from './tab.component';

const meta: Meta<TabComponent> = {
  title: 'Components/Navigation/Tab',
  component: TabComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NzTabsModule,
        TranslateModule
      ]
    })
  ],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(TabSize),
      description: 'Size of the tabs',
    },
    type: {
      control: 'select',
      options: Object.values(TabType),
      description: 'Type of the tabs',
    },
    fill: {
      control: 'boolean',
      description: 'Whether to fill the container width',
    },
    tabCenter: {
      control: 'boolean',
      description: 'Whether to center the tabs',
    },
    theme: {
      control: 'select',
      options: Object.values(TabTheme),
      description: 'Theme of the tabs',
    },
    initIndex: {
      control: 'number',
      description: 'Initial active tab index',
    },
    tabs: {
      control: 'object',
      description: 'Array of tab items',
    },
  },
};

export default meta;
type Story = StoryObj<TabComponent>;

export const Default: Story = {
  args: {
    size: TabSize.Md,
    type: TabType.Pill,
    theme: TabTheme.Brand,
    initIndex: 0,
    tabs: [
      'Tab 1',
      'Tab 2',
      'Tab 3'
    ]
  },
  render: (args) => ({
    props: args,
    template: `
      <app-tab
        [tabs]="tabs"
        [size]="size"
        [type]="type"
        [theme]="theme"
        [initIndex]="initIndex"
        (tabChangeIndex)="onTabChange($event)">
     >
      </app-tab>
    `,
  }),
};

export const Filled: Story = {
  args: {
    size: TabSize.Md,
    type: TabType.Pill,
    fill: true,
    tabCenter: false,
    theme: TabTheme.Brand,
    initIndex: 0,
    tabs: [
      'Tab 1',
      'Tab 2',
      'Tab 3'
    ]
  },
  render: (args) => ({
    props: args,
    template: `
      <app-tab
        [size]="size"
        [type]="type"
        [fill]="fill"
        [tabCenter]="tabCenter"
        [theme]="theme"
        [initIndex]="initIndex"
        [tabs]="tabs"
        (tabChangeIndex)="onTabChange($event)">
      </app-tab>
    `,
  }),
};

export const Centered: Story = {
  args: {
    size: TabSize.Md,
    type: TabType.Pill,
    fill: false,
    tabCenter: true,
    theme: TabTheme.Brand,
    initIndex: 0,
    tabs: [
      'Tab 1',
      'Tab 2',
      'Tab 3'
    ]
  },
  render: (args) => ({
    props: args,
    template: `
      <app-tab
        [size]="size"
        [type]="type"
        [fill]="fill"
        [tabCenter]="tabCenter"
        [theme]="theme"
        [initIndex]="initIndex"
        [tabs]="tabs"
        (tabChangeIndex)="onTabChange($event)">
      </app-tab>
    `,
  }),
};

export const Small: Story = {
  args: {
    size: TabSize.Sm,
    type: TabType.Pill,
    fill: false,
    tabCenter: false,
    theme: TabTheme.Brand,
    initIndex: 0,
    tabs: [
      'Tab 1',
      'Tab 2',
      'Tab 3'
    ]
  },
  render: (args) => ({
    props: args,
    template: `
      <app-tab
        [size]="size"
        [type]="type"
        [fill]="fill"
        [tabCenter]="tabCenter"
        [theme]="theme"
        [initIndex]="initIndex"
        [tabs]="tabs"
        (tabChangeIndex)="onTabChange($event)">
      </app-tab>
    `,
  }),
};
