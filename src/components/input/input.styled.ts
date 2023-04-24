import styled from 'styled-components/native';
import MaskInput from 'react-native-mask-input';

interface TextInputProps {
  hasRightIcon?: boolean;
  hasLeftIcon?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputComponent = styled(MaskInput)<TextInputProps>`
  padding-left: ${({ hasLeftIcon }) => (hasLeftIcon ? 45 : 12)};
  padding-right: ${({ hasRightIcon }) => (hasRightIcon ? 32 : 12)};
  background-color: #fcfffe;
  border-radius: 15px;
  height: 44px;
  font-family: 'Mustica Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #303030;
  width: 100%;
`;

export const IconRightContainer = styled.TouchableOpacity`
  position: absolute;
  right: 12;
  top: 14;
`;

export const IconLeftContainer = styled.View`
  position: absolute;
  left: 12;
  top: 12;
  z-index: 1;
`;
