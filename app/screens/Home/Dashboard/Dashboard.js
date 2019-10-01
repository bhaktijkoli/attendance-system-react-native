import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-ui-kitten';

import style from './../../../styles/main';

class Dashboard extends React.Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <Text>Hello Dashboard</Text>
      </View>
    )
  }
}

export default Dashboard;
