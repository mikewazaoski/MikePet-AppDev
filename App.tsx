import React from 'react';

import AppNav from './src/navigations';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>
      <AppNav />
      <Toast />
    </>
  );
};

export default App;