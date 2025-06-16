import { CommonModule } from '@angular/common';
import { AlertComponent } from '@components/base/alert/alert.component';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

const meta: Meta<AlertComponent> = {
  title: 'CONTROLS/Alert',
  component: AlertComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    })
  ],
  argTypes: {
    color: {
      control: 'select',
      options: ['info', 'success', 'alert', 'error'],
      description: 'Color of the alert',
    },
    title: {
      control: 'text',
      description: 'Title of the alert',
    },
    isCardHeader: {
      control: 'boolean',
      description: 'Whether the alert is used as a card header',
    },
    styleAlert: {
      control: 'select',
      options: ['1', '2'],
      description: 'Style of the alert',
    },
  },
};

export default meta;
type Story = StoryObj<AlertComponent>;

export const Info: Story = {
  args: {
    color: 'info',
    title: 'Information',
    isCardHeader: false,
    styleAlert: '1',
  },
  render: (args) => ({
    props: args,
    template: `
     <div
        app-alert
        [isCardHeader]="true"
        [styleAlert]="'2'"
        [title]="'Quý khách vui lòng kiểm tra và xác nhận thông tin giao dịch!'"
      ></div>
    `,
  }),
};

export const Success: Story = {
  args: {
    color: 'success',
    title: 'Success',
    isCardHeader: false,
    styleAlert: '1',
  },
  render: (args) => ({
    props: args,
    template: `
      <div app-alert [color]="color" [title]="title" [isCardHeader]="isCardHeader" [styleAlert]="styleAlert">
        This is a success alert
      </div>
    `,
  }),
};

export const Warning: Story = {
  args: {
    color: 'alert',
    title: 'Warning',
    isCardHeader: false,
    styleAlert: '1',
  },
  render: (args) => ({
    props: args,
    template: `
      <div app-alert [color]="color" [title]="title" [isCardHeader]="isCardHeader" [styleAlert]="styleAlert">
        This is a warning alert
      </div>
    `,
  }),
};

export const Error: Story = {
  args: {
    color: 'error',
    title: 'Error',
    isCardHeader: false,
    styleAlert: '1',
  },
  render: (args) => ({
    props: args,
    template: `
      <div app-alert [color]="color" [title]="title" [isCardHeader]="isCardHeader" [styleAlert]="styleAlert">
        This is an error alert
      </div>
    `,
  }),
};

export const CardHeader: Story = {
  args: {
    color: 'info',
    title: 'Card Header',
    isCardHeader: true,
    styleAlert: '1',
  },
  render: (args) => ({
    props: args,
    template: `
      <div app-alert [color]="color" [title]="title" [isCardHeader]="isCardHeader" [styleAlert]="styleAlert">
        This is a card header alert
      </div>
    `,
  }),
};

export const Style2: Story = {
  args: {
    color: 'info',
    title: 'Style 2',
    isCardHeader: false,
    styleAlert: '2',
  },
  render: (args) => ({
    props: args,
    template: `
      <div app-alert [color]="color" [title]="title" [isCardHeader]="isCardHeader" [styleAlert]="styleAlert">
        This is a style 2 alert
      </div>
    `,
  }),
};
