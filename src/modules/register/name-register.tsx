import React from 'react';
// Components
import { Background, Input } from '../../components';
// Namespace
import { StackNavigatorRoutes } from '../../navigation/navigation.namespace';
// Hooks
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useUserRegisterData } from '../../providers/user-data-provider';
// Styled
import {
  Container,
  InputContainer,
  Label,
  LogoIcon,
  RegisterButton,
  Title,
} from './register.styled';

const NameRegister: React.FC = () => {
  const { navigate } = useNavigation();
  const headerHeight = useHeaderHeight();
  const { setFirstName, setSecondName, firstName, secondName } = useUserRegisterData();

  const onRegisterNext = () => {
    navigate(StackNavigatorRoutes.DateOfBirthRegister as never);
  };

  return (
    <Background>
      <Container marginTop={headerHeight}>
        <LogoIcon />
        <Title>ПРОЦЕС РЕЄСТРАЦІЇ</Title>
        <InputContainer>
          <Label>Ваше ім’я</Label>
          <Input value={firstName} onChangeText={setFirstName} />
        </InputContainer>
        <InputContainer>
          <Label>Ваше прізвище</Label>
          <Input value={secondName} onChangeText={setSecondName} />
        </InputContainer>
        <RegisterButton isMain title="ДАЛІ" onPress={onRegisterNext} />
      </Container>
    </Background>
  );
};

export default NameRegister;
