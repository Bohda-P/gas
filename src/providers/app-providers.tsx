import React, { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { AuthProvider } from './auth-provider';
import { UserProvider } from './user-data-provider';

const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#f1f1f1" barStyle="dark-content" translucent />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
        <AuthProvider>
          <UserProvider>
            <NavigationContainer>{children}</NavigationContainer>
          </UserProvider>
        </AuthProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppProviders;
