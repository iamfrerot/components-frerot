import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '.';

const meta: Meta = {
 title: 'MyComponents/Button',
 component: Button,
 parameters: {
  layout: 'centered',
 },
 tags: ['autodocs'],
 argTypes: {
  text: {
   description: 'The Label Of The button',
   control: {
    type: 'text',
   },
  },
  primary: {
   description: 'The Change Button to primary Button',
   control: {
    type: 'boolean',
   },
  },
  secondary: {
   description: 'The Change Button to primary Button',
   control: {
    type: 'boolean',
   },
  },
  onClick: {
   description: 'Click Handler for The button',
  },
  type: {
   description: 'Button type',
   control: {
    type: 'select',
   },
  },
 },
};

export default meta;

export const ButtonPrimary: StoryObj = {
 args: {
  text: 'Skip',
  primary: true,
  secondary: false,
  onClick: action('primary Button Clicked'),
 },
};

export const ButtonSecondary: StoryObj = {
 args: {
  text: 'Skip',
  primary: true,
  secondary: false,
 },
};
