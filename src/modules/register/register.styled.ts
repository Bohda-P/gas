import styled, { css } from 'styled-components/native';
import { Logo } from '../../assets';
import { Button } from '../../components';

interface ContainerProps {
  marginTop: number;
}

export const Container = styled.View<ContainerProps>(
  ({ marginTop }) =>
    css`
      margin-top: ${marginTop + 20};
      justify-content: center;
      align-items: center;
      padding: 0 32px 32px;
    `
);

export const Title = styled.Text`
  font-family: 'Intro ';
  font-weight: 400;
  font-size: 16;
  line-height: 20;
  color: #303030;
  margin-bottom: 38;
`;

export const LogoIcon = styled(Logo).attrs({ width: 67, height: 91 })`
  margin-bottom: 40;
`;

export const InputContainer = styled.View`
  font-family: 'Intro ';
  font-weight: 400;
  font-size: 16;
  line-height: 20;
  color: #303030;
  margin-bottom: 24;
  width: 100%;
`;

export const Label = styled.Text`
  margin-bottom: 12;
  font-family: 'Mustica Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #303030;
`;

export const RegisterButton = styled(Button)`
  padding: 12px 10px;
`;

export const TermsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100%;
`;

export const TermsTitleContainer = styled.View`
  padding-bottom: 7;
  border-bottom-width: 1px;
  border-bottom-color: #303030;
`;

export const TermsTitle = styled.Text`
  font-family: 'Mustica Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #303030;
`;
