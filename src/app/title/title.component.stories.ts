import type { Meta, StoryFn } from '@storybook/angular';
import { TitleComponent } from './title.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/Title',
  component: TitleComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    title: {
      name: 'Title'
    },
    withContentRight: {
      name: 'With content on a right',
      type: 'boolean'
    }
  },
  args: {
    title: 'Title of the title container(hi!)',
    withContentRight: false
  }
} as Meta<TitleComponent>;

const Template: StoryFn<TitleComponent> = (args: TitleComponent) => ({
    props: {
      ...args,
      doSomething: (event: Event) => {
        console.log('Action triggered:', event);
        action('clicked')(event); // Call the `action` for logging in the Actions panel
      },
    },
  });

export const Default = Template.bind({});
Default.args = {
  title: 'Welcome to Storybook',
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'Custom Storybook Title'
};


