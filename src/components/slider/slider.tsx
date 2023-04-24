import React from 'react';
import Swiper from 'react-native-swiper';

import { ImageContainer } from './slider.styled';

interface SliderProps {
  images: any[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  return (
    <Swiper
      loadMinimal
      loadMinimalSize={1}
      loop={true}
      autoplay
      height={166}
      horizontal
      dotColor="rgba(48, 48, 48, 0.5)"
      activeDotColor="#303030"
      dotStyle={{ width: 5, height: 5 }}
      activeDotStyle={{ width: 5, height: 5 }}
      paginationStyle={{
        paddingLeft: 18,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
    >
      {images.map((item, index) => (
        <ImageContainer source={item} resizeMode="cover" key={index} />
      ))}
    </Swiper>
  );
};

export default Slider;
