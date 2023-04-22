import React from 'react';
import Swiper from 'react-native-swiper';
import { View } from 'react-native';

const Slider: React.FC = () => {
  return (
    <Swiper loadMinimal loadMinimalSize={1} loop={true} autoplay height={200} horizontal>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          width: 200,
          height: 200,
          backgroundColor: '#FFF333',
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          width: 200,
          height: 200,
          backgroundColor: 'red',
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          width: 200,
          height: 200,
          backgroundColor: 'black',
        }}
      />
    </Swiper>
  );
};

export default Slider;
