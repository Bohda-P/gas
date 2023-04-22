import styled from 'styled-components/native';

import { Overlay } from '../../assets';

export const Container = styled.ImageBackground.attrs({ source: Overlay, resizeMode: 'cover' })`
  position: absolute;
  flex: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background-image: url(${Overlay});
`;
