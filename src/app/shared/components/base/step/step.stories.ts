import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StepType } from '@enums/ui.enum';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { StepComponent } from './step.component';

@Component({
  selector: 'app-step-story',
  standalone: true,
  imports: [CommonModule, StepComponent],
  template: `
    <app-step
      [type]="type"
      [currentStep]="currentStep"
      [steps]="steps"
      [count]="count"
    ></app-step>
  `,
})
class StepStoryComponent {
  @Input() type: StepType = StepType.Full;
  @Input() currentStep = 1;
  @Input() count = 4;
  @Input() steps = [
    { name: 'step.khoi_tao' },
    { name: 'step.xac_nhan' },
    { name: 'step.xac_thuc' },
    { name: 'step.ket_qua' },
  ];
}

export default {
  title: 'Components/Navigation/Step',
  component: StepComponent,
  decorators: [
    moduleMetadata({
      imports: [StepStoryComponent],
    }),
  ],
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(StepType),
      description: 'Type of the step component',
    },
    currentStep: {
      control: 'number',
      description: 'Current active step',
    },
    count: {
      control: 'number',
      description: 'Total number of steps',
    },
    steps: {
      control: 'object',
      description: 'Array of step items',
    },
  },
} as Meta;

const Template: StoryFn<StepStoryComponent> = (args: StepStoryComponent) => ({
  component: StepStoryComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  type: StepType.Full,
  currentStep: 1,
  count: 4,
  steps: [
    { name: 'step.khoi_tao' },
    { name: 'step.xac_nhan' },
    { name: 'step.xac_thuc' },
    { name: 'step.ket_qua' },
  ],
};



export const CurrentStep = Template.bind({});
CurrentStep.args = {
  ...Default.args,
  currentStep: 2,
};

export const ThreeSteps = Template.bind({});
ThreeSteps.args = {
  ...Default.args,
  count: 3,
  steps: [
    { name: 'step.khoi_tao' },
    { name: 'step.xac_nhan' },
    { name: 'step.ket_qua' },
  ],
};
