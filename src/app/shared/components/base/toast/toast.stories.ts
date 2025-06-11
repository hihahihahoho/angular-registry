import { CommonModule } from '@angular/common';
import { ToastService } from '@services/toast/toast.service';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
import { of } from 'rxjs';
import { SvgInlineComponent } from '../svg-inline/svg-inline.component';
import { ToastComponent } from './toast.component';

const mockToastService = {
  getToast: () => of({
    type: 'success',
    title: 'Success',
    message: 'Operation completed successfully',
    duration: 3000,
    placement: 'topRight',
    class: 'custom-toast'
  })
};

const meta: Meta<ToastComponent> = {
  title: 'Components/Feedback/Toast',
  component: ToastComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SvgInlineComponent,
        NzNotificationModule
      ],
      providers: [
        NzNotificationService,
        { provide: ToastService, useValue: mockToastService }
      ]
    })
  ],
  argTypes: {
    data: {
      control: 'object',
      description: 'Toast data object',
    },
  },
};

export default meta;
type Story = StoryObj<ToastComponent>;

export const Success: Story = {
  args: {
    data: {
      type: 'success',
      title: 'Success',
      message: 'Operation completed successfully',
      duration: 3000,
      placement: 'topRight',
      class: 'custom-toast'
    }
  },
  render: (args) => ({
    props: args,
    template: `
      <app-toast [data]="data"></app-toast>
    `,
  }),
};

export const Error: Story = {
  args: {
    data: {
      type: 'error',
      title: 'Error',
      message: 'An error occurred',
      duration: 3000,
      placement: 'topRight',
      class: 'custom-toast'
    }
  },
  render: (args) => ({
    props: args,
    template: `
      <app-toast [data]="data"></app-toast>
    `,
  }),
};

export const Warning: Story = {
  args: {
    data: {
      type: 'warning',
      title: 'Warning',
      message: 'Please be careful',
      duration: 3000,
      placement: 'topRight',
      class: 'custom-toast'
    }
  },
  render: (args) => ({
    props: args,
    template: `
      <app-toast [data]="data"></app-toast>
    `,
  }),
};

export const Info: Story = {
  args: {
    data: {
      type: 'info',
      title: 'Information',
      message: 'Here is some information',
      duration: 3000,
      placement: 'topRight',
      class: 'custom-toast'
    }
  },
  render: (args) => ({
    props: args,
    template: `
      <app-toast [data]="data"></app-toast>
    `,
  }),
};
