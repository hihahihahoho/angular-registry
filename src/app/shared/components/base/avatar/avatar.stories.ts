import { CommonModule } from '@angular/common';
import { AvatarSize, AvatarStyle, AvatarType, ButtonColor, RankingType } from '@enums/ui.enum';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

const meta: Meta<AvatarComponent> = {
  title: 'CONTROLS/Avatar',
  component: AvatarComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    })
  ],
  argTypes: {
    rank: {
      control: 'select',
      options: Object.values(RankingType),
      description: 'Rank of the avatar',
    },
    size: {
      control: 'select',
      options: Object.values(AvatarSize),
      description: 'Size of the avatar',
    },
    type: {
      control: 'select',
      options: Object.values(AvatarType),
      description: 'Type of the avatar',
    },
    content: {
      control: 'text',
      description: 'Content of the avatar (image URL or text)',
    },
    round: {
      control: 'boolean',
      description: 'Whether the avatar is round',
    },
    style: {
      control: 'select',
      options: Object.values(AvatarStyle),
      description: 'Style of the avatar',
    },
    changeColorIcon: {
      control: 'boolean',
      description: 'Whether to change icon color',
    },
    enableChange: {
      control: 'boolean',
      description: 'Whether the avatar can be changed',
    },
    iconChange: {
      control: 'text',
      description: 'Icon for change button',
    },
    iconChange2Color: {
      control: 'boolean',
      description: 'Whether to use two colors for change icon',
    },
    btnChangeColor: {
      control: 'select',
      options: Object.values(ButtonColor),
      description: 'Color of the change button',
    },
    active: {
      control: 'boolean',
      description: 'Whether the avatar is active',
    },
  },
};

export default meta;
type Story = StoryObj<AvatarComponent>;

export const Image: Story = {
  args: {
    rank: RankingType.None,
    size: AvatarSize.Md,
    type: AvatarType.Image,
    content: 'https://i.pravatar.cc/300',
    round: false,
    style: AvatarStyle.Bank,
    changeColorIcon: false,
    enableChange: false,
    iconChange: 'media/icons/doutone/edit.svg',
    iconChange2Color: true,
    btnChangeColor: ButtonColor.Primary,
    active: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-avatar
        [rank]="rank"
        [size]="size"
        [type]="type"
        [content]="content"
        [round]="round"
        [style]="style"
        [changeColorIcon]="changeColorIcon"
        [enableChange]="enableChange"
        [iconChange]="iconChange"
        [iconChange2Color]="iconChange2Color"
        [btnChangeColor]="btnChangeColor"
        [active]="active">
      </app-avatar>
    `,
  }),
};

export const Icon: Story = {
  args: {
    rank: RankingType.None,
    size: AvatarSize.Md,
    type: AvatarType.Icon,
    content: 'media/icons/outline/user.svg',
    round: false,
    style: AvatarStyle.Bank,
    changeColorIcon: false,
    enableChange: false,
    iconChange: 'media/icons/doutone/edit.svg',
    iconChange2Color: true,
    btnChangeColor: ButtonColor.Primary,
    active: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-avatar
        [rank]="rank"
        [size]="size"
        [type]="type"
        [content]="content"
        [round]="round"
        [style]="style"
        [changeColorIcon]="changeColorIcon"
        [enableChange]="enableChange"
        [iconChange]="iconChange"
        [iconChange2Color]="iconChange2Color"
        [btnChangeColor]="btnChangeColor"
        [active]="active">
      </app-avatar>
    `,
  }),
};

export const Text: Story = {
  args: {
    rank: RankingType.None,
    size: AvatarSize.Md,
    type: AvatarType.Text,
    content: 'JD',
    round: false,
    style: AvatarStyle.Bank,
    changeColorIcon: false,
    enableChange: false,
    iconChange: 'media/icons/doutone/edit.svg',
    iconChange2Color: true,
    btnChangeColor: ButtonColor.Primary,
    active: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-avatar
        [rank]="rank"
        [size]="size"
        [type]="type"
        [content]="content"
        [round]="round"
        [style]="style"
        [changeColorIcon]="changeColorIcon"
        [enableChange]="enableChange"
        [iconChange]="iconChange"
        [iconChange2Color]="iconChange2Color"
        [btnChangeColor]="btnChangeColor"
        [active]="active">
      </app-avatar>
    `,
  }),
};

export const Round: Story = {
  args: {
    rank: RankingType.None,
    size: AvatarSize.Md,
    type: AvatarType.Image,
    content: 'https://i.pravatar.cc/300',
    round: true,
    style: AvatarStyle.Bank,
    changeColorIcon: false,
    enableChange: false,
    iconChange: 'media/icons/doutone/edit.svg',
    iconChange2Color: true,
    btnChangeColor: ButtonColor.Primary,
    active: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-avatar
        [rank]="rank"
        [size]="size"
        [type]="type"
        [content]="content"
        [round]="round"
        [style]="style"
        [changeColorIcon]="changeColorIcon"
        [enableChange]="enableChange"
        [iconChange]="iconChange"
        [iconChange2Color]="iconChange2Color"
        [btnChangeColor]="btnChangeColor"
        [active]="active">
      </app-avatar>
    `,
  }),
};

export const Editable: Story = {
  args: {
    rank: RankingType.None,
    size: AvatarSize.Md,
    type: AvatarType.Image,
    content: 'https://i.pravatar.cc/300',
    round: false,
    style: AvatarStyle.Bank,
    changeColorIcon: false,
    enableChange: true,
    iconChange: 'media/icons/doutone/edit.svg',
    iconChange2Color: true,
    btnChangeColor: ButtonColor.Primary,
    active: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-avatar
        [rank]="rank"
        [size]="size"
        [type]="type"
        [content]="content"
        [round]="round"
        [style]="style"
        [changeColorIcon]="changeColorIcon"
        [enableChange]="enableChange"
        [iconChange]="iconChange"
        [iconChange2Color]="iconChange2Color"
        [btnChangeColor]="btnChangeColor"
        [active]="active">
      </app-avatar>
    `,
  }),
};
