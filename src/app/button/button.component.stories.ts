import type { Meta, StoryObj } from '@storybook/angular';

import ButtonComponent, { ButtonSize } from './button.component';
import { action } from '@storybook/addon-actions';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  // render - Dynamically binds args to props and ensures event handlers like onClick.
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
      onClick: args.onClick || action('Button clicked!'),
    },
  }),
  argTypes: {
    size: {
      options: Object.values(ButtonSize), // enums are supported 
      control: {
        type: "inline-radio",
      },
    },
    backgroundColor: {
      control: 'color',
    }
  },
  // args - Defines default values for props or inputs passed to the component
  args: {
    size: ButtonSize.Medium, 
  },
};
export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Click Me!',
    onClick: action('Button clicked!'),
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: ButtonSize.Large,
    label: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: ButtonSize.Medium,
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: ButtonSize.Small,
    label: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    primary: false,
    disabled: true,
    label: 'Button',
  },
};

export const Custom: Story = {
  args: {
    backgroundColor: 'green',
    label: 'Button',
  },
};

export const CustomWithEmoji: Story = {
  args: {
    backgroundColor: 'green',
    label: '🚀 😎 👍 💯',
  },
};

