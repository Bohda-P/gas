import React from 'react';
import { Button } from './header.styled';
import { Back, Notifications } from '../../assets';
import { useNavigation } from '@react-navigation/native';

interface HeaderButtonProps {
  isBackButton?: boolean;
  isHideLeftButton?: boolean;
}

const HeaderButtonLeft: React.FC<HeaderButtonProps> = ({ isBackButton, isHideLeftButton }) => {
  const { goBack } = useNavigation();

  if (isHideLeftButton) {
    return null;
  }

  return !isBackButton ? (
    <Button>
      <Notifications />
    </Button>
  ) : (
    <Button onPress={goBack}>
      <Back />
    </Button>
  );
};

export default HeaderButtonLeft;
