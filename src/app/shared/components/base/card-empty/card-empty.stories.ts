import { CommonModule } from '@angular/common';
import { CardEmptyType } from '@enums/ui.enum';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CardEmptyComponent } from './card-empty.component';

const meta: Meta<CardEmptyComponent> = {
  title: 'CONTROLS/Card Empty',
  component: CardEmptyComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    })
  ],
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(CardEmptyType),
      description: 'Type of empty card',
    },
    title: {
      control: 'text',
      description: 'Title text for the empty card',
    },
    moreContent: {
      control: 'text',
      description: 'Additional content template',
    },
  },
};

export default meta;
type Story = StoryObj<CardEmptyComponent>;

export const List: Story = {
  args: {
    type: CardEmptyType.List,
    title: 'No items found',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-card-empty
        [type]="type"
        [title]="title">
      </app-card-empty>
    `,
  }),
};

export const User: Story = {
  args: {
    type: CardEmptyType.User,
    title: 'No users found',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-card-empty
        [type]="type"
        [title]="title">
      </app-card-empty>
    `,
  }),
};
