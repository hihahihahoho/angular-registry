import { CommonModule } from '@angular/common';
import { PillColor, PillSize } from '@enums/ui.enum';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { PillComponent } from './pill.component';

const meta: Meta<PillComponent> = {
  title: 'Components/Data Display/Pill',
  component: PillComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        PillComponent,
      ],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      options: Object.values(PillColor),
      description: 'Color of the pill',
      table: {
        defaultValue: { summary: PillColor.Primary },
      },
    },
    size: {
      control: 'select',
      options: Object.values(PillSize),
      description: 'Size of the pill',
      table: {
        defaultValue: { summary: PillSize.Md },
      },
    },
    prefixIcon: {
      control: 'text',
      description: 'Icon to show before content',
    },
    suffixIcon: {
      control: 'text',
      description: 'Icon to show after content',
    },
    sizeIcon: {
      control: 'number',
      description: 'Size of the icon',
    },
    labelClick: {
      control: 'boolean',
      description: 'Whether the pill is clickable',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Pill component for displaying status, tags, or labels in a compact format.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<PillComponent>;

export const Basic: Story = {
  args: {
    color: PillColor.Primary,
    size: PillSize.Md,
    prefixIcon: null,
    suffixIcon: null,
    sizeIcon: 4,
    labelClick: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-pill
        [color]="color"
        [size]="size"
        [prefixIcon]="prefixIcon"
        [suffixIcon]="suffixIcon"
        [sizeIcon]="sizeIcon"
        [labelClick]="labelClick"
      >
        Pill Content
      </app-pill>
    `,
  }),
};

export const WithIcons: Story = {
  args: {
    ...Basic.args,
    prefixIcon: 'media/icons/solid/check.svg',
    suffixIcon: 'media/icons/solid/arrow-right.svg',
  },
};

export const Clickable: Story = {
  args: {
    ...Basic.args,
    labelClick: true,
  },
};

export const Small: Story = {
  args: {
    ...Basic.args,
    size: PillSize.Sm,
  },
};

export const Large: Story = {
  args: {
    ...Basic.args,
    size: PillSize.Lg,
  },
};

export const Success: Story = {
  args: {
    ...Basic.args,
    color: PillColor.Success,
  },
};

export const Warning: Story = {
  args: {
    ...Basic.args,
    color: PillColor.Warning,
  },
};

export const Danger: Story = {
  args: {
    ...Basic.args,
    color: PillColor.Danger,
  },
};
