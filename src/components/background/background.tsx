import React, { PropsWithChildren } from 'react';
import { Container } from './background.styled';

const Background: React.FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Background;
