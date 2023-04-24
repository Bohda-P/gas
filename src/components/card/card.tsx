import React from 'react';
import { Container, IconContainer, Title } from './card.styled';
import { Card, Qr } from '../../assets';

const CardComponent: React.FC = () => {
  // Todo add grn amount
  return (
    <Container>
      <IconContainer>
        <Card />
      </IconContainer>
      <Title>1205.80 грн</Title>
      <Qr />
    </Container>
  );
};

export default CardComponent;
