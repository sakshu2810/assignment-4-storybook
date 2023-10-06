import type { Meta, StoryObj } from '@storybook/react';

import { Textfield } from './Textfield';

const meta = {
  title: 'Textfield',
  component: Textfield,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
   
  },
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextField: Story = {
  args: {
    placeholder: 'Enter your name',
    label: 'Name',
    handleChange: (event:any)=> {console.log("change :",event)}
  },
};
