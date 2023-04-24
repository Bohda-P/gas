import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px 18px 13px 10px;
  background: #fcfffe;
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

export const Title = styled.Text`
  font-family: 'Mustica Pro';
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.64;
  color: #303030;
  flex-wrap: wrap;
  flex: 1;
  margin-right: 16;
`;
