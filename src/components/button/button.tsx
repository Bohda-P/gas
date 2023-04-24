import React from 'react';
import { Container, IconContainer, Title } from './button.styled';

interface ButtonProps extends Styled.Shared {
  onPress?: () => void;
  icon?: React.FC;
  title: React.ReactNode;
  isMain?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onPress, icon: Icon, title, isMain, style }) => {
  return (
    <Container onPress={onPress} isMain={isMain} style={style}>
      {Icon && (
        <IconContainer>
          <Icon />
        </IconContainer>
      )}
      <Title isMain={isMain} numberOfLines={2}>
        {title}
      </Title>
    </Container>
  );
};

export default Button;
