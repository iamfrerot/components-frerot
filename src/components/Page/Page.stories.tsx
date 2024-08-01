import Page from '.';

export default {
 title: 'MyComponents/Page',
 component: Page,
 parameters: {
  layout: 'centered',
 },
 tags: ['autodocs'],
 argTypes: {
  title: {
   description: 'The Title of the Page',
   control: {
    type: 'text',
   },
  },
  children: {
   description: 'The children of the page',
   control: {
    type: 'text',
   },
  },
 },
};

export const PageOne = {
 args: {
  title: 'This is The Page one Title',
  children: 'these are the page One children',
 },
};

export const PageTwo = {
 args: {
  title: 'This is the page Two title',
  children: 'These are The Page two children',
 },
};
