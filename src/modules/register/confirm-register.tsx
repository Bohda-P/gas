import React, { useState } from 'react';
import { Background, Input } from '../../components';
// Namespace
import { StackNavigatorRoutes } from '../../navigation/navigation.namespace';
import {
  Container,
  InputContainer,
  Label,
  LogoIcon,
  RegisterButton,
  Title,
} from './register.styled';
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';
import { Edit, Flag } from '../../assets';
import { useUserRegisterData } from '../../providers/user-data-provider';
import { ConfirmCode } from './components';
import { useUserData } from '../../providers/auth-provider';

const ConfirmRegister: React.FC = () => {
  const { navigate, goBack } = useNavigation();
  const headerHeight = useHeaderHeight();
  const { phone } = useUserRegisterData();
  const { confirmCode } = useUserData();
  const [code, setCode] = useState('');

  const onRegisterNext = () => {
    confirmCode(code);
    navigate(StackNavigatorRoutes.NameRegister as never);
  };

  return (
    <Background>
      <Container marginTop={headerHeight}>
        <LogoIcon />
        <Title>ПРОЦЕС РЕЄСТРАЦІЇ</Title>
        <InputContainer>
          <Label>Ваш номер телефону</Label>
          <Input
            rightIcon={Edit}
            leftIcon={Flag}
            onRightIconPress={goBack}
            editable={false}
            value={phone}
          />
        </InputContainer>
        <InputContainer>
          <Label>Введіть код з SMS</Label>
          <ConfirmCode onChangeCode={setCode} />
        </InputContainer>
        <RegisterButton isMain title="ДАЛІ" onPress={onRegisterNext} />
      </Container>
    </Background>
  );
};

export default ConfirmRegister;
