import React from 'react';
// Hooks
import { useHeaderHeight } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
// Components
import { Background } from '../../components';
// Namespace
import { StackNavigatorRoutes } from '../../navigation/navigation.namespace';
// Styled
import { Container, SignInButton, Title } from './not-authorized.styled';

const NotAuthorized: React.FC = () => {
  const headerHeight = useHeaderHeight();
  const { reset } = useNavigation();

  const onSignInPress = () => {
    reset({
      index: 0,
      routes: [{ name: StackNavigatorRoutes.Register as never }],
    });
  };

  return (
    <Background>
      <Container marginTop={headerHeight}>
        <Title>Зареєструйстесь для створення власного кабінету</Title>
        <SignInButton isMain title="Зареєструватись" onPress={onSignInPress} />
      </Container>
    </Background>
  );
};

export default NotAuthorized;
