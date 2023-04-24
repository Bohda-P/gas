import styled from 'styled-components/native';
// Assets
import { Logo } from '../../assets';

export const Container = styled.View`
  flex-direction: row;
  padding-vertical: 22;
  padding-horizontal: 22;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;

export const Button = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, bottom: 10, left: 10, right: 10 },
})``;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
`;

export const LogoTitle = styled.Text`
  font-family: 'Intro ';
  font-style: normal;
  font-size: 12px;
`;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LogoIcon = styled(Logo)`
  margin-bottom: 7;
`;
