import React, { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#f1f1f1" barStyle="dark-content" translucent />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
        <NavigationContainer>{children}</NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppProviders;
