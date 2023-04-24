import styled, { css } from 'styled-components/native';
// Components
import { Button } from '../../components';

interface ContainerProps {
  marginTop: number;
}

export const Container = styled.View<ContainerProps>(
  ({ marginTop }) =>
    css`
      margin-top: ${marginTop + 20};
      padding: 57px 30px;
      align-items: center;
      background-color: #fcfffe;
      border-top-right-radius: 15;
      border-top-left-radius: 15;
      flex: 1;
      justify-content: flex-start;
    `
);

export const Title = styled.Text`
  margin-bottom: 32;
  font-family: 'Mustica Pro';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.64;
  color: #303030;
  flex-wrap: wrap;
  text-align: center;
`;

export const SignInButton = styled(Button)``;
