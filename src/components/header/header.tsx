import React from 'react';
import { Container, Title } from './header.styled';
import HeaderButtonRight from './header-button-right';
import HeaderButtonLeft from './header-button-left';
import { Logo } from '../../assets';
import { StackHeaderProps } from '@react-navigation/stack';
import { WITH_BACK_BUTTON } from './header.namespace';
import { StackNavigatorRoutes } from '../../navigation/navigation.namespace';

interface HeaderProps {
  title?: string;
  hasLogo?: boolean;
  isHideRightButton?: boolean;
}

const Header: React.FC<StackHeaderProps & HeaderProps> = ({
  route,
  title,
  hasLogo,
  isHideRightButton,
}) => {
  const name = route.name as StackNavigatorRoutes;
  const hasBackButton = WITH_BACK_BUTTON.includes(name);
  return (
    <Container>
      <HeaderButtonLeft isBackButton={hasBackButton} />
      {title && <Title>{title}</Title>}
      {hasLogo && <Logo />}
      <HeaderButtonRight isHide={isHideRightButton} />
    </Container>
  );
};

export default Header;
