import React from 'react';

import { Container, SignInButton, Title } from './not-authorized.styled';
import { useHeaderHeight } from '@react-navigation/elements';
import { Background } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigatorRoutes } from '../../navigation/navigation.namespace';

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
