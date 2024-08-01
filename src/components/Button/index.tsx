import React from 'react';
import { ButtonProps } from './types';
import { Container } from './style';

const Button: React.FC<ButtonProps> = ({
 text = 'Button',
 onClick,
 type = 'button',
}) => {
 return (
  <Container onClick={onClick} type={type}>
   {text}
  </Container>
 );
};

export default Button;
