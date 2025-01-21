/* eslint-disable @typescript-eslint/no-empty-function */
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import ButtonComponent from '../button/button.component';
import { CommonModule } from '@angular/common';

import * as ButtonStories from '../button/button.component.stories';
import { EventEmitter } from '@angular/core';
import ButtonGroupComponent from './button-group.component';

const meta: Meta<ButtonGroupComponent> = {
  title: 'Example/Button Group',
  component: ButtonGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ButtonComponent],
    }),
  ],
  // ArgTypes for props of the ButtonGroupComponent
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    buttons: { control: false }, // Buttons are objects, so no control in Storybook UI
  },
  args: {
    orientation: 'horizontal',
  },
};
export default meta;


type Story = StoryObj<ButtonGroupComponent>;

const buttonTemplate = (args: Partial<ButtonComponent>): ButtonComponent => ({
  ...args,
  clicked: new EventEmitter<Event>(),
  classes: [],
  onClick: () => {},
  primary: args.primary ?? false,
  backgroundColor: args.backgroundColor ?? '',
  size: args.size ?? 'medium',
  label: args.label ?? 'Button',
  disabled: args.disabled ?? false,
});
// https://storybook.js.org/docs/7/writing-stories#using-args
// you can import args to reuse when writing stories for other components
export const Pair: Story = {
  args: {
    orientation: 'horizontal',
    buttons: [
      buttonTemplate(ButtonStories.Primary.args as ButtonComponent),
      buttonTemplate(ButtonStories.Secondary.args as ButtonComponent),
    ],
  },
};


