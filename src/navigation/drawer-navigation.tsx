import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerNavigatorRoutes } from './navigation.namespace';
// Stack Navigation
import StackNavigation from './stack-navigation';

const { Screen, Navigator } = createDrawerNavigator();

const DrawerNavigation: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        // drawerStyle: {
        //   width: '180%',
        // },
      }}
      //   drawerContent={() => null}
    >
      <Screen name={DrawerNavigatorRoutes.AppStack} component={StackNavigation} />
    </Navigator>
  );
};

export default DrawerNavigation;
