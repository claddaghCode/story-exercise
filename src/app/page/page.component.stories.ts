import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageComponent } from './page.component';
import ButtonComponent from '../button/button.component';
import HeaderComponent from '../header/header.component';


// Storybook metadata configuration
export default {
  title: 'Example/Page',
  component: PageComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ButtonComponent, HeaderComponent], // Import req'd modules and components
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements
    }),
  ],
} as Meta<PageComponent>;


type Story = StoryObj<PageComponent>;

export const LoggedOut: Story = {
  render: (args: PageComponent) => ({
    props: args,
  }),
};

// More on interaction testing: https://storybook.js.org/docs/angular/writing-tests/interaction-testing
export const LoggedIn: Story = {
  render: (args: PageComponent) => ({
    props: args,
  }),
};

LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = canvas.getByRole('button', { name: /Log in/i });
  await expect(loginButton).toBeInTheDocument();
  await userEvent.click(loginButton);
  await expect(loginButton).not.toBeInTheDocument();

  const logoutButton = canvas.getByRole('button', { name: /Log out/i });
  await expect(logoutButton).toBeInTheDocument();
};