import { CommonModule } from '@angular/common';
import { BadgeColor, BadgeSize } from '@enums/UI/ui.enum';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'CONTROLS/Badge',
  component: BadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    })
  ],
  argTypes: {
    color: {
      control: 'select',
      options: Object.values(BadgeColor),
      description: 'Color of the badge',
    },
    size: {
      control: 'select',
      options: Object.values(BadgeSize),
      description: 'Size of the badge',
    },
    prefixIcon: {
      control: 'text',
      description: 'Icon path for the prefix',
    },
    suffixIcon: {
      control: 'text',
      description: 'Icon path for the suffix',
    },
  },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  args: {
    color: BadgeColor.Success,
    size: BadgeSize.Md,
    prefixIcon: '',
    suffixIcon: '',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-badge
        [color]="color"
        [size]="size"
        [prefixIcon]="prefixIcon"
        [suffixIcon]="suffixIcon">
        Badge
      </app-badge>
    `,
  }),
};

export const WithPrefixIcon: Story = {
  args: {
    color: BadgeColor.Success,
    size: BadgeSize.Md,
    prefixIcon: 'media/icons/outline/check.svg',
    suffixIcon: '',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-badge
        [color]="color"
        [size]="size"
        [prefixIcon]="prefixIcon"
        [suffixIcon]="suffixIcon">
        Badge
      </app-badge>
    `,
  }),
};

export const WithSuffixIcon: Story = {
  args: {
    color: BadgeColor.Success,
    size: BadgeSize.Md,
    prefixIcon: '',
    suffixIcon: 'media/icons/outline/check.svg',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-badge
        [color]="color"
        [size]="size"
        [prefixIcon]="prefixIcon"
        [suffixIcon]="suffixIcon">
        Badge
      </app-badge>
    `,
  }),
};

export const Small: Story = {
  args: {
    color: BadgeColor.Success,
    size: BadgeSize.Sm,
    prefixIcon: '',
    suffixIcon: '',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-badge
        [color]="color"
        [size]="size"
        [prefixIcon]="prefixIcon"
        [suffixIcon]="suffixIcon">
        Badge
      </app-badge>
    `,
  }),
};

export const Large: Story = {
  args: {
    color: BadgeColor.Success,
    size: BadgeSize.Lg,
    prefixIcon: '',
    suffixIcon: '',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-badge
        [color]="color"
        [size]="size"
        [prefixIcon]="prefixIcon"
        [suffixIcon]="suffixIcon">
        Badge
      </app-badge>
    `,
  }),
};
