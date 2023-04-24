import styled from 'styled-components/native';

interface ButtonProps {
  isMain?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 10px;
  background: ${({ isMain }) => (isMain ? '#00B488' : '#fcfffe')};
  border: 1px solid #fcfffe;
  border-radius: 15px;
`;

export const IconContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  background-color: #f4fbfa;
  border-radius: 100;
  margin-right: 12;
`;

export const Title = styled.Text<ButtonProps>`
  font-family: 'Mustica Pro';
  font-weight: 600;
  font-size: ${({ isMain }) => (isMain ? 18 : 14)};
  line-height: ${({ isMain }) => (isMain ? 22 : 19)};
  letter-spacing: 0.64;
  color: ${({ isMain }) => (isMain ? '#FCFFFE' : '#303030')};
  flex-wrap: wrap;
  flex: 1;
  text-align: ${({ isMain }) => (isMain ? 'center' : 'left')};
`;
