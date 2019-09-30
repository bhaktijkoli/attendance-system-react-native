import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';

import Home from './app/screens/Home/Home';

const App = () => {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <AppContainer />
    </ApplicationProvider>
  );
};

const AppContainerConfig = {
  headerMode: 'none',
}

const AppNavigator = createStackNavigator({
  Home: { screen: Home, },
}, AppContainerConfig);

const AppContainer =  createAppContainer(AppNavigator);

export default App;
