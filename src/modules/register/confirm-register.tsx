import React, { useState } from 'react';
// Components
import { ConfirmCode } from './components';
import { Background, Input } from '../../components';
// Namespace
import { StackNavigatorRoutes } from '../../navigation/navigation.namespace';
// Hooks
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useUserRegisterData } from '../../providers/user-data-provider';
import { useUserData } from '../../providers/auth-provider';
// Assets
import { Edit, Flag } from '../../assets';
// Styled
import {
  Container,
  InputContainer,
  Label,
  LogoIcon,
  RegisterButton,
  Title,
} from './register.styled';

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
