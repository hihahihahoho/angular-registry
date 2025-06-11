import { CommonModule } from '@angular/common';
import { PillColor, PillSize } from '@enums/ui.enum';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { SvgInlineComponent } from '../svg-inline/svg-inline.component';
import { ChipComponent } from './chip.component';

const meta: Meta<ChipComponent> = {
  title: 'CONTROLS/Chip',
  component: ChipComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, SvgInlineComponent],
    })
  ],
  argTypes: {
    color: {
      control: 'select',
      options: Object.values(PillColor),
      description: 'Color of the chip',
    },
    size: {
      control: 'select',
      options: Object.values(PillSize),
      description: 'Size of the chip',
    },
    suffix: {
      control: 'text',
      description: 'Suffix template',
    },
    sizeIcon: {
      control: 'number',
      description: 'Size of the icon',
    },
    prefixIcon: {
      control: 'text',
      description: 'Prefix icon path',
    },
    suffixIcon: {
      control: 'text',
      description: 'Suffix icon path',
    },
    data: {
      control: 'object',
      description: 'Data object for the chip',
    },
    labelClick: {
      control: 'boolean',
      description: 'Whether the label is clickable',
    },
  },
};

export default meta;
type Story = StoryObj<ChipComponent>;

export const Default: Story = {
  args: {
    color: PillColor.Primary,
    size: PillSize.Md,
    suffix: null,
    sizeIcon: 4,
    prefixIcon: null,
    suffixIcon: null,
    data: null,
    labelClick: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-chip
        [color]="color"
        [size]="size"
        [suffix]="suffix"
        [sizeIcon]="sizeIcon"
        [prefixIcon]="prefixIcon"
        [suffixIcon]="suffixIcon"
        [data]="data"
        [labelClick]="labelClick">
        Chip
      </app-chip>
    `,
  }),
};

export const WithPrefixIcon: Story = {
  args: {
    color: PillColor.Primary,
    size: PillSize.Md,
    suffix: null,
    sizeIcon: 4,
    prefixIcon: 'media/icons/outline/check.svg',
    suffixIcon: null,
    data: null,
    labelClick: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-chip
        [color]="color"
        [size]="size"
        [suffix]="suffix"
        [sizeIcon]="sizeIcon"
        [prefixIcon]="prefixIcon"
        [suffixIcon]="suffixIcon"
        [data]="data"
        [labelClick]="labelClick">
        Chip
      </app-chip>
    `,
  }),
};

export const WithSuffixIcon: Story = {
  args: {
    color: PillColor.Primary,
    size: PillSize.Md,
    suffix: null,
    sizeIcon: 4,
    prefixIcon: null,
    suffixIcon: 'media/icons/outline/check.svg',
    data: null,
    labelClick: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-chip
        [color]="color"
        [size]="size"
        [suffix]="suffix"
        [sizeIcon]="sizeIcon"
        [prefixIcon]="prefixIcon"
        [suffixIcon]="suffixIcon"
        [data]="data"
        [labelClick]="labelClick">
        Chip
      </app-chip>
    `,
  }),
};

export const Small: Story = {
  args: {
    color: PillColor.Primary,
    size: PillSize.Sm,
    suffix: null,
    sizeIcon: 4,
    prefixIcon: null,
    suffixIcon: null,
    data: null,
    labelClick: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-chip
        [color]="color"
        [size]="size"
        [suffix]="suffix"
        [sizeIcon]="sizeIcon"
        [prefixIcon]="prefixIcon"
        [suffixIcon]="suffixIcon"
        [data]="data"
        [labelClick]="labelClick">
        Chip
      </app-chip>
    `,
  }),
};

export const Clickable: Story = {
  args: {
    color: PillColor.Primary,
    size: PillSize.Md,
    suffix: null,
    sizeIcon: 4,
    prefixIcon: null,
    suffixIcon: null,
    data: null,
    labelClick: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-chip
        [color]="color"
        [size]="size"
        [suffix]="suffix"
        [sizeIcon]="sizeIcon"
        [prefixIcon]="prefixIcon"
        [suffixIcon]="suffixIcon"
        [data]="data"
        [labelClick]="labelClick">
        Chip
      </app-chip>
    `,
  }),
};
