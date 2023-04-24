import React, { useEffect, useState } from 'react';
import { Background, Input } from '../../components';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
// Namespace
import { StackNavigatorRoutes } from '../../navigation/navigation.namespace';
import {
  Container,
  InputContainer,
  Label,
  LogoIcon,
  RegisterButton,
  TermsContainer,
  TermsTitle,
  TermsTitleContainer,
  Title,
} from './register.styled';
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useUserRegisterData } from '../../providers/user-data-provider';
import { isIos } from '../../constants';

import { firebase } from '@react-native-firebase/database';
import { useUserData } from '../../providers/auth-provider';

const DateOfBirthRegister: React.FC = () => {
  const { reset } = useNavigation();
  const headerHeight = useHeaderHeight();
  const { setDateOfBirth, dateOfBirth, firstName, secondName, phone } = useUserRegisterData();
  const { user } = useUserData();
  const [isPickDate, setPickDate] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const onRegisterNext = async () => {
    await firebase
      .app()
      .database('https://bank-ce797-default-rtdb.europe-west1.firebasedatabase.app/')
      .ref(`/Users/${user.uid}`)
      .set({
        firstName,
        secondName,
        phone,
        dateOfBirth: dateOfBirth.toLocaleDateString(),
      });
    reset({
      index: 0,
      routes: [{ name: StackNavigatorRoutes.Home as never }],
    });
  };

  const onInputPres = () => {
    setPickDate(true);
  };

  const setDate = (_: any, date: Date) => {
    setDateOfBirth(date);
  };

  useEffect(() => {
    if (dateOfBirth) {
      setTimeout(() => {
        false;
      }, 1000);
    }
  }, [dateOfBirth]);

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <Background>
      <Container marginTop={headerHeight} onPointerEnter={() => setPickDate(false)}>
        <LogoIcon />
        <Title>ПРОЦЕС РЕЄСТРАЦІЇ</Title>
        <InputContainer>
          <Label>Дата народження</Label>
          <Input onPressIn={onInputPres} value={formatDate(dateOfBirth)} editable={false} />
        </InputContainer>
        <TermsContainer>
          <TermsTitleContainer>
            <TermsTitle>Я погоджуюсь з правилами програми</TermsTitle>
          </TermsTitleContainer>
          <CheckBox
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            onCheckColor="#FCFFFE"
            onFillColor="#00B488"
            boxType="square"
            style={{
              width: 32,
              height: 32,
            }}
          />
        </TermsContainer>
        <RegisterButton isMain title="ДАЛІ" onPress={onRegisterNext} />
      </Container>
      {isPickDate && (
        <DateTimePicker
          onChange={setDate}
          value={dateOfBirth}
          mode="date"
          display={isIos ? 'spinner' : 'default'}
        />
      )}
    </Background>
  );
};

export default DateOfBirthRegister;
