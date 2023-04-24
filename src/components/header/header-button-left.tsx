import React from 'react';
// Hooks
import { useNavigation } from '@react-navigation/native';
// Assets
import { Back, Notifications } from '../../assets';
// Styled
import { Button } from './header.styled';

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
