import React from 'react';
// Hooks
import { DrawerActions, useNavigation } from '@react-navigation/native';
// Styled
import { Button } from './header.styled';
// Assets
import { BurgerMenu } from '../../assets';

interface HeaderButtonProps {
  isHide?: boolean;
}

const HeaderButtonRight: React.FC<HeaderButtonProps> = ({ isHide }) => {
  const { dispatch } = useNavigation();

  return (
    !isHide && (
      <Button onPress={() => dispatch(DrawerActions.toggleDrawer())}>
        <BurgerMenu />
      </Button>
    )
  );
};

export default HeaderButtonRight;
