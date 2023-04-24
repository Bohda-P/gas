import React from 'react';
// Styled
import { Container, IconContainer, Title } from './card.styled';
// Assets
import { Card, Qr } from '../../assets';

const CardComponent: React.FC = () => {
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
