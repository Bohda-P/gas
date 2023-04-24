import React from 'react';
import { Container, IconLeftContainer, IconRightContainer, InputComponent } from './input.styled';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  rightIcon?: React.FC;
  leftIcon?: React.FC;
  mask?: (string | RegExp)[];
  onRightIconPress?: () => void;
}

const Input: React.FC<InputProps> = ({
  rightIcon: RightIcon,
  leftIcon: LeftIcon,
  onRightIconPress,
  mask,
  ...rest
}) => {
  return (
    <Container>
      {LeftIcon && (
        <IconLeftContainer>
          <LeftIcon />
        </IconLeftContainer>
      )}
      <InputComponent hasRightIcon={!!RightIcon} hasLeftIcon={!!LeftIcon} mask={mask} {...rest} />
      {RightIcon && (
        <IconRightContainer onPress={onRightIconPress}>
          <RightIcon />
        </IconRightContainer>
      )}
    </Container>
  );
};

export default Input;
