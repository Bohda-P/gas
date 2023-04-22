import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// Namespace
import { StackNavigatorRoutes } from './navigation.namespace';
// Screens
import { Home, Register, NotAuthorized } from '../modules';

import Header from '../components/header/header';

export type RootStackParamList = {
  [StackNavigatorRoutes.Home]: undefined;
  [StackNavigatorRoutes.Register]: undefined;
  [StackNavigatorRoutes.NotAuthorized]: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const StackNavigation: React.FC = () => {
  return (
    <Navigator>
      <Screen
        name={StackNavigatorRoutes.Home}
        component={Home}
        options={{
          header: (props) => <Header {...props} hasLogo />,
          headerTransparent: true,
        }}
      />
      <Screen
        name={StackNavigatorRoutes.Register}
        component={Register}
        options={{
          header: (props) => <Header {...props} title="Мій кабінет" />,
          headerTransparent: true,
        }}
      />
      <Screen
        name={StackNavigatorRoutes.NotAuthorized}
        component={NotAuthorized}
        options={{
          header: (props) => <Header {...props} isHideRightButton />,
          headerTransparent: true,
        }}
      />
    </Navigator>
  );
};

export default StackNavigation;
// const index = navigation.getState().index;
// const screenName = navigation.getState().routes[index].name;
