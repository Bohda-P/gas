import React from 'react';
// Namespace
import { StackNavigatorRoutes } from '../../navigation/navigation.namespace';
// Styled
import {
  Container,
  InputContainer,
  Label,
  LogoIcon,
  RegisterButton,
  Title,
} from './register.styled';
import { Background, Input } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';
import { Close, Flag } from '../../assets';
import { KeyboardAvoidingView } from 'react-native';
import { PHONE_MASK } from './constants';
import { useUserRegisterData } from '../../providers/user-data-provider';
import { useUserData } from '../../providers/auth-provider';

const Register: React.FC = () => {
  const { navigate } = useNavigation();
  const headerHeight = useHeaderHeight();
  const { phone, setPhone } = useUserRegisterData();
  const { signIn } = useUserData();

  const onRegisterNext = () => {
    signIn(phone);
    navigate(StackNavigatorRoutes.ConfirmRegister as never);
  };

  const cleanInput = () => {
    setPhone('');
  };

  return (
    <Background>
      <KeyboardAvoidingView>
        <Container marginTop={headerHeight}>
          <LogoIcon />
          <Title>ПРОЦЕС РЕЄСТРАЦІЇ</Title>
          <InputContainer>
            <Label>Введіть Ваш номер телефону</Label>
            <Input
              rightIcon={phone?.length ? Close : null}
              leftIcon={Flag}
              value={phone}
              onChangeText={setPhone}
              mask={PHONE_MASK}
              onRightIconPress={cleanInput}
            />
          </InputContainer>
          <RegisterButton isMain title="ДАЛІ" onPress={onRegisterNext} />
        </Container>
      </KeyboardAvoidingView>
    </Background>
  );
};

export default Register;
