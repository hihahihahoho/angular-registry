import { CommonModule } from '@angular/common';
import { SvgInlineComponent } from '@components/base/svg-inline/svg-inline.component';
import { ButtonAlign, ButtonColor, ButtonShape, ButtonSize } from '@enums/ui.enum';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'CONTROLS/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ButtonComponent, SvgInlineComponent],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(ButtonSize),
      description: 'Size of the button',
      table: {
        defaultValue: { summary: ButtonSize.Lg },
      },
    },
    color: {
      control: 'select',
      options: Object.values(ButtonColor),
      description: 'Color variant of the button',
      table: {
        defaultValue: { summary: ButtonColor.Primary },
      },
    },
    shape: {
      control: 'select',
      options: Object.values(ButtonShape),
      description: 'Shape of the button',
      table: {
        defaultValue: { summary: ButtonShape.Around },
      },
    },
    align: {
      control: 'select',
      options: Object.values(ButtonAlign),
      description: 'Alignment of button content',
      table: {
        defaultValue: { summary: ButtonAlign.Center },
      },
    },
    iconOnly: {
      control: 'boolean',
      description: 'Whether the button shows only an icon',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    mute: {
      control: 'boolean',
      description: 'Whether the button has a muted style',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    wFull: {
      control: 'boolean',
      description: 'Whether the button takes full width',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isHug: {
      control: 'boolean',
      description: 'Whether the button hugs its content',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    prefixIcon: {
      control: 'text',
      description: 'Icon to show before the button text',
    },
    suffixIcon: {
      control: 'text',
      description: 'Icon to show after the button text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Buttons are interactive elements that trigger actions when clicked. They come in different styles, sizes, and variants to suit various use cases. Use them to submit forms, trigger modals, navigate between pages, or perform any clickable action.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// Primary Button
export const Primary: Story = {
  args: {
    color: ButtonColor.Primary,
  },
  render: (args) => ({
    props: args,
    template: '<button app-button [color]="color">Primary Button</button>'
  })
};

// Secondary Button
export const Secondary: Story = {
  args: {
    color: ButtonColor.Secondary,
  },
  render: (args) => ({
    props: args,
    template: '<button app-button [color]="color">Secondary Button</button>'
  })
};

// Large Button
export const Large: Story = {
  args: {
    size: ButtonSize.Lg,
  },
  render: (args) => ({
    props: args,
    template: '<button app-button [size]="size">Large Button</button>'
  })
};

// Small Button
export const Small: Story = {
  args: {
    size: ButtonSize.Sm,
  },
  render: (args) => ({
    props: args,
    template: '<button app-button [size]="size">Small Button</button>'
  })
};

// Button with Icon
export const WithIcon: Story = {
  args: {
    prefixIcon: '/media/icons/outline/copy.svg',
  },
  render: (args) => ({
    props: args,
    template: '<button app-button [prefixIcon]="prefixIcon">Button with Icon</button>'
  })
};

// Icon Only Button
export const IconOnly: Story = {
  args: {
    iconOnly: true,
    prefixIcon: '/media/icons/outline/copy.svg',
  },
  render: (args) => ({
    props: args,
    template: '<button app-button [iconOnly]="iconOnly" [prefixIcon]="prefixIcon"></button>'
  })
};

// Full Width Button
export const FullWidth: Story = {
  args: {
    wFull: true,
  },
  render: (args) => ({
    props: args,
    template: '<button app-button [wFull]="wFull">Full Width Button</button>'
  })
};

// Muted Button
export const Muted: Story = {
  args: {
    mute: true,
    color:ButtonColor.Secondary
  },
  render: (args) => ({
    props: args,
    template: '<button app-button [color]="color" [mute]="mute">Muted Button</button>'
  })
};

// Button with Different Shapes
export const Circle: Story = {
  args: {
    shape: ButtonShape.Circle,
  },
  render: (args) => ({
    props: args,
    template: '<button app-button [shape]="shape">Circle Button</button>'
  })
};

export const None: Story = {
  args: {
    shape: ButtonShape.None,
  },
  render: (args) => ({
    props: args,
    template: '<button app-button [shape]="shape">No Shape Button</button>'
  })
};

// Button with Different Alignments
export const StartAligned: Story = {
  args: {
    wFull: true,
    align: ButtonAlign.Start,
  },
  render: (args) => ({
    props: args,
    template: '<button app-button [align]="align" [wFull]="wFull">Start Aligned Button</button>'
  })
};

export const EndAligned: Story = {
  args: {
    wFull: true,
    align: ButtonAlign.End,
  },
  render: (args) => ({
    props: args,
    template: '<button app-button [align]="align" [wFull]="wFull">End Aligned Button</button>'
  })
};