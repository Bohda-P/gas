import React from 'react';
// Providers
import AppProviders from './providers/app-providers';
// Navigation
import DrawerNavigation from './navigation/drawer-navigation';

const App: React.FC = () => {
  return (
    <AppProviders>
      <DrawerNavigation />
    </AppProviders>
  );
};
export default App;
