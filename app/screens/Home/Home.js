import React from 'react';
import { BottomNavigation, BottomNavigationTab, Icon } from 'react-native-ui-kitten';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Dashboard from './Dashboard/Dashboard';
import Students from './Students/Students';
import Settings from './Settings/Settings';


const DashboardIcon = (style) => (
  <Icon {...style} name='layout' />
);
const StudentsIcon = (style) => (
  <Icon {...style} name='people' />
);
const SettingsIcon = (style) => (
  <Icon {...style} name='settings' />
);

const BottomNavigationShowcase = (props) => {

  const onTabSelect = (selectedIndex) => {
    let routes = props.navigation.state.routes;
    props.navigation.navigate(routes[selectedIndex].routeName);
  };

  return (
    <BottomNavigation
      selectedIndex={props.navigation.state.index}
      onSelect={onTabSelect}>
      <BottomNavigationTab title='Dashboard' icon={DashboardIcon}/>
      <BottomNavigationTab title='Students' icon={StudentsIcon}/>
      <BottomNavigationTab title='Settings' icon={SettingsIcon}/>
    </BottomNavigation>
  );
}

const BottomTabNavigator = createBottomTabNavigator({
  Dashboard: Dashboard,
  Students: Students,
  Settings: Settings,
}, {
  initialRouteName: 'Dashboard',
  tabBarComponent: BottomNavigationShowcase,
});

const BottomTabNavigatorContainer = createAppContainer(BottomTabNavigator)

export default BottomTabNavigatorContainer;
