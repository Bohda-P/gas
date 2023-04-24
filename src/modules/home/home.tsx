import React, { useContext, useState } from 'react';
// Components
import { Background, Card, Loading, Slider } from '../../components';
// Styled
import {
  Title,
  Container,
  DiscountButton,
  ButtonContainer,
  BuyButton,
  MapContainer,
} from './home.styled';
import { AuthContext } from '../../providers/auth-provider';
import { useHeaderHeight } from '@react-navigation/elements';
import { IMAGES } from './constants';
import { Gas, Percent, Ticket } from '../../assets';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Home: React.FC = () => {
  const [code, setCode] = useState('');
  const { loading, confirm, signIn, confirmCode, user, signOut } = useContext(AuthContext);

  const headerHeight = useHeaderHeight();

  if (loading) {
    return <Loading />;
  }

  return (
    <Background>
      <Container paddingTop={headerHeight}>
        <Slider images={IMAGES} />
        <Title>Слідкуй за знижками</Title>
        <DiscountButton title="Отримати персональну знижку" icon={Percent} />
        <ButtonContainer>
          <BuyButton title="Придбати пальне" icon={Ticket} />
          <BuyButton title="Ціни на пальне" icon={Gas} />
        </ButtonContainer>
        <Title>Паливна картка</Title>
        <Card />
        <Title>Карта АЗК САН</Title>
        <MapContainer>
          <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 49.23355,
              longitude: 28.44854,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={{ width: '100%', height: '100%', borderRadius: 15 }}
          />
        </MapContainer>
      </Container>
    </Background>
  );
};

export default Home;

// if (!confirm && !user) {
//   return (
//     <Background>
//       <Container>
//         <Button title="Phone Number Sign In" onPress={() => signIn('+380954429220')} />
//       </Container>
//     </Background>
//   );
// }
{
  /* <TouchableOpacity onPress={() => navigate(StackNavigatorRoutes.Register as never)}>
          <Title>Bank</Title>
        </TouchableOpacity>
        <TextInput
          style={{ width: 300, height: 80, padding: 20, fontSize: 20, borderWidth: 1 }}
          value={code}
          keyboardType="numeric"
          onChangeText={setCode}
        />
        <Button title="Confirm Code" onPress={() => confirmCode(code)} />
        <Button title="LogLout" onPress={signOut} /> */
}
