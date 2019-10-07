import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider } from "react-redux";

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';

import SearchForDevice from './app/screens/SearchForDevice/SearchForDevice';
import Home from './app/screens/Home/Home';
import StudentDetails from './app/screens/StudentDetails/StudentDetails';
import AddStudent from './app/screens/AddStudent/AddStudent';
import AddAttendance from './app/screens/AddAttendance/AddAttendance';
import Subjects from './app/screens/Subjects/Subjects';
import AddSubject from './app/screens/AddSubject/AddSubject';

import store from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <AppContainer />
      </ApplicationProvider>
    </Provider>
  );
};

const AppContainerConfig = {
  headerMode: 'none',
}

const AppNavigator = createStackNavigator({
  SearchForDevice: { screen: SearchForDevice, },
  Home: { screen: Home, },
  AddStudent: { screen: AddStudent, },
  StudentDetails: { screen: StudentDetails, },
  AddAttendance: { screen: AddAttendance, },
  Subjects: { screen: Subjects, },
  AddSubject: { screen: AddSubject, },
}, AppContainerConfig);

const AppContainer =  createAppContainer(AppNavigator);

export default App;
