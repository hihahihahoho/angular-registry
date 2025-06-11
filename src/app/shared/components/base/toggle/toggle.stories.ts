import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { ToggleComponent } from './toggle.component';

@Component({
  selector: 'app-toggle-story',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToggleComponent],
  template: `
    <app-toggle
      [label]="label"
      [nzControl]="nzControl"
      [control]="control"
      (clickEvent)="onClick()"
    ></app-toggle>
  `,
})
class ToggleStoryComponent {
  @Input() label = 'Toggle Label';
  @Input() nzControl = false;
  control = new FormControl(false);

  onClick() {
    console.log('Toggle clicked');
  }
}

export default {
  title: 'Components/Controls/Toggle',
  component: ToggleComponent,
  decorators: [
    moduleMetadata({
      imports: [ToggleStoryComponent],
    }),
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the toggle',
    },
    nzControl: {
      control: 'boolean',
      description: 'Whether to use ng-zorro control',
    },
    control: {
      control: 'object',
      description: 'Form control for the toggle',
    },
  },
} as Meta;

const Template: StoryFn<ToggleStoryComponent> = (args: ToggleStoryComponent) => ({
  component: ToggleStoryComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Toggle Label',
  nzControl: false,
};

export const WithControl = Template.bind({});
WithControl.args = {
  ...Default.args,
  nzControl: true,
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: '',
  nzControl: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  control: new FormControl({ value: false, disabled: true }),
};
