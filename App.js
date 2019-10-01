import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';

import SearchForDevice from './app/screens/SearchForDevice/SearchForDevice';
import Home from './app/screens/Home/Home';

const App = () => {
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <AppContainer />
      </ApplicationProvider>
    </React.Fragment>
  );
};

const AppContainerConfig = {
  headerMode: 'none',
}

const AppNavigator = createStackNavigator({
  SearchForDevice: { screen: SearchForDevice, },
  Home: { screen: Home, },
}, AppContainerConfig);

const AppContainer =  createAppContainer(AppNavigator);

export default App;
