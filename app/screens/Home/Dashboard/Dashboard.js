import React from 'react';
import { View } from 'react-native';
import { TopNavigation, Text } from 'react-native-ui-kitten';

import style from './../../../styles/main';

class Dashboard extends React.Component {
  render() {
    return(
      <View style={style.container}>
        <TopNavigation title="Dashboard" style={style.header}/>
        <View style={style.contentBackground}>

        </View>
      </View>
    )
  }
}

export default Dashboard;
