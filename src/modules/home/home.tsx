import React from 'react';
// Components
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Background, Card, Loading, Slider } from '../../components';
// Hooks
import { useUserData } from '../../providers/auth-provider';
import { useHeaderHeight } from '@react-navigation/elements';
// Namespace
import { IMAGES } from './constants';
// Assets
import { Gas, Percent, Ticket } from '../../assets';
// Styled
import {
  Title,
  Container,
  DiscountButton,
  ButtonContainer,
  BuyButton,
  MapContainer,
} from './home.styled';

const Home: React.FC = () => {
  const { loading } = useUserData();

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
