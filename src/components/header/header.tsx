import React from 'react';
// Namespace
import { StackHeaderProps } from '@react-navigation/stack';
import { WITH_BACK_BUTTON } from './header.namespace';
import { StackNavigatorRoutes } from '../../navigation/navigation.namespace';
// Components
import HeaderButtonRight from './header-button-right';
import HeaderButtonLeft from './header-button-left';
// Styled
import { Container, LogoContainer, LogoIcon, LogoTitle, Title } from './header.styled';

interface HeaderProps {
  title?: string;
  hasLogo?: boolean;
  isHideRightButton?: boolean;
  isHideLeftButton?: boolean;
}

const Header: React.FC<StackHeaderProps & HeaderProps> = ({
  route,
  title,
  hasLogo,
  isHideRightButton,
  isHideLeftButton,
}) => {
  const name = route.name as StackNavigatorRoutes;
  const hasBackButton = WITH_BACK_BUTTON.includes(name);
  return (
    <Container>
      <HeaderButtonLeft isBackButton={hasBackButton} isHideLeftButton={isHideLeftButton} />
      {title && <Title>{title}</Title>}
      {hasLogo && (
        <LogoContainer>
          <LogoIcon />
          <LogoTitle>CAH</LogoTitle>
        </LogoContainer>
      )}
      <HeaderButtonRight isHide={isHideRightButton} />
    </Container>
  );
};

export default Header;
