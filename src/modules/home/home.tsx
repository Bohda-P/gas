import React, { useCallback, useContext, useEffect, useState } from 'react';
// Hooks
import { useNavigation } from '@react-navigation/native';
import { Background, Loading, Slider } from '../../components';
// Styled
import { Title, Container } from './home.styled';
import { StackNavigatorRoutes } from '../../navigation/navigation.namespace';
import { Button, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../providers/auth-provider';

const Home: React.FC = () => {
  const [code, setCode] = useState('');
  const { loading, confirm, signIn, confirmCode, user, signOut } = useContext(AuthContext);

  const { navigate } = useNavigation();

  if (loading) {
    return <Loading />;
  }

  if (!confirm && !user) {
    return (
      <Background>
        <Container>
          <Button title="Phone Number Sign In" onPress={() => signIn('+380954429220')} />
        </Container>
      </Background>
    );
  }

  return (
    <Background>
      <Container>
        <TouchableOpacity onPress={() => navigate(StackNavigatorRoutes.Register as never)}>
          <Title>Bank</Title>
        </TouchableOpacity>
        <TextInput
          style={{ width: 300, height: 80, padding: 20, fontSize: 20, borderWidth: 1 }}
          value={code}
          keyboardType="numeric"
          onChangeText={setCode}
        />
        <Button title="Confirm Code" onPress={() => confirmCode(code)} />
        <Button title="LogLout" onPress={signOut} />
      </Container>
      <Slider />
    </Background>
  );
};

export default Home;
