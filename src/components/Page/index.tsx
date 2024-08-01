import { FC } from 'react';
import { PageProps } from './types';
import { Container } from './styled';
const Page: FC<PageProps> = ({ title, children }) => {
 return (
  <Container data-testid="page-container">
   <h1>{title}</h1>
   {children}
  </Container>
 );
};

export default Page;
