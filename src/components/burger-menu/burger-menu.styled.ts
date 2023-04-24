import styled from 'styled-components/native';
// Assets
import { ArrowRight } from '../../assets';

export const Container = styled.View`
  padding: 100px 22px;
  justify-content: space-between;
  flex: 1;
`;

export const ButtonsContainer = styled.View``;

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 28px;
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #fcfffe;
  border-radius: 100;
  margin-right: 22;
  width: 33;
  height: 33;
`;

export const ButtonTitle = styled.Text`
  font-family: 'Mustica Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.64;
  color: #fcfffe;
`;

export const SignOutIcon = styled(ArrowRight)`
  margin-left: 18;
`;
