import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import Button from '../button/button.component';
import HeaderComponent from './header.component';

export const actionsData = {
  clickLogin: action('clickLogin'),
  clickLogout: action('clickLogout'),
  clickCreateAccount: action('clickCreateAccount')
};

const meta: Meta<HeaderComponent> = {
  title: 'Example/Header',
  component: HeaderComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/angular/writing-docs/autodocs
  tags: ['autodocs'],
  render: args => ({ props: args }),
  decorators: [
    moduleMetadata({
      imports: [CommonModule, Button]
    })
  ],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const LoggedIn: Story = {
  render: (args: HeaderComponent)  => ({
    props: {
      ...args,
      ...actionsData
    }
  }),
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
};

export const LoggedOut: Story = {
  // render - Dynamically binds args to props and ensures event handlers like onClick.
  render: (args: HeaderComponent)  => ({
    props: {
      ...args,
      ...actionsData
    }
  }),
};
