import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from './header.styled';
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
