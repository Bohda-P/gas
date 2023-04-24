import React, { useCallback } from 'react';
// Hooks
import { useUserData } from '../../providers/auth-provider';
import { useNavigation } from '@react-navigation/native';
// Namespace
import { BurgerMenuLinks } from './burger-menu.namespace';
import { StackNavigatorRoutes } from '../../navigation/navigation.namespace';
// Styled
import {
  ButtonContainer,
  ButtonTitle,
  ButtonsContainer,
  Container,
  IconContainer,
  SignOutIcon,
} from './burger-menu.styled';

interface BurgerMenuProps {}

const BurgerMenu: React.FC<BurgerMenuProps> = () => {
  const { user, signOut } = useUserData();
  const { navigate } = useNavigation();

  const onMenuItemClick = useCallback(() => {
    if (!user) {
      navigate(StackNavigatorRoutes.NotAuthorized as never);
    }
  }, [user, navigate]);

  return (
    <Container>
      <ButtonsContainer>
        {BurgerMenuLinks.map(({ icon: Icon, title }) => (
          <ButtonContainer onPress={onMenuItemClick} key={title}>
            <IconContainer>
              <Icon />
            </IconContainer>
            <ButtonTitle>{title}</ButtonTitle>
          </ButtonContainer>
        ))}
      </ButtonsContainer>
      {!!user && (
        <ButtonContainer onPress={signOut}>
          <ButtonTitle>Вийти</ButtonTitle>
          <SignOutIcon />
        </ButtonContainer>
      )}
    </Container>
  );
};

export default BurgerMenu;
