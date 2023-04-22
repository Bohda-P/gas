import React from 'react';
// Namespace
import { RootStackParamList } from '../../navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigatorRoutes } from '../../navigation/navigation.namespace';
// Styled
import { Container, Location } from './register.styled';
import { TouchableOpacity } from 'react-native-gesture-handler';

type OneDayWeatherProps = NativeStackScreenProps<RootStackParamList, StackNavigatorRoutes.Register>;

const Register: React.FC<OneDayWeatherProps> = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigate(StackNavigatorRoutes.NotAuthorized as never)}>
        <Location>To Not auth</Location>
      </TouchableOpacity>
    </Container>
  );
};

export default Register;
