import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Page from '.';

describe('Page', () => {
 it('Renders title and children', () => {
  const title = 'Test Title';
  const children = 'Test Children';
  const { getByText } = render(<Page title={title} children={children} />);

  const titleElement = getByText(title);
  const childrenElement = getByText(children);

  expect(titleElement).toBeInTheDocument();
  expect(childrenElement).toBeInTheDocument();
 });
 it('Renders Correct Stylings', () => {
  const title = 'Text title';
  const children = 'Test Children';
  const { getByTestId } = render(<Page title={title} children={children} />);
  const container = getByTestId('page-container');
  // const titleElement = getByText(title);
  // const childrenElement = getByText(children);
  expect(container).toHaveStyle(`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
background-color: #f5f5
   `);
 });
});
