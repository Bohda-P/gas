import React, { useCallback, useEffect, useState } from 'react';
// Hooks
import { useNavigation } from '@react-navigation/native';
import { Background, Calendar, Loading, Slider } from '../../components';
// Styled
import { Title, Container } from './home.styled';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigatorRoutes } from '../../navigation/navigation.namespace';

const Home: React.FC = () => {
  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const { navigate, setOptions } = useNavigation();

  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };

  /**
   * VIEW
   */

  // const CalendarComponent: React.FC = useCallback(() => <Calendar onPress={showDatePicker} />, []);

  // useEffect(() => {
  //   setOptions({ headerRight: CalendarComponent });
  // }, [setOptions, CalendarComponent]);

  // if (false) {
  //   return <Loading />;
  // }

  return (
    <Background>
      <Container>
        <TouchableOpacity onPress={() => navigate(StackNavigatorRoutes.Register as never)}>
          <Title>Bank</Title>
        </TouchableOpacity>
      </Container>
      <Slider />
    </Background>
  );
};

export default Home;
