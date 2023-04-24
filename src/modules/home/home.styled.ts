import styled from 'styled-components/native';
import { Button as ButtonComponent } from '../../components';

interface ContainerProps {
  paddingTop: number;
}

export const Container = styled.ScrollView.attrs<ContainerProps>(({ paddingTop }) => ({
  contentContainerStyle: {
    paddingTop,
    paddingBottom: 30,
  },
}))<ContainerProps>`
  padding: 20px;
  background-color: transparent;
  flex: 1;
`;

export const Title = styled.Text`
  margin: 12px 0 18px;
  font-family: 'Mustica Pro';
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.64;
  color: #303030;
`;

export const ButtonContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 18px;
  gap: 7;
`;

export const DiscountButton = styled(ButtonComponent)``;

export const BuyButton = styled(ButtonComponent)`
  flex-shrink: 1;
`;

export const MapContainer = styled.View`
  height: 118px;
  border: 1px solid #fcfffe;
  border-radius: 15px;
`;
