import React from 'react';
import { View } from 'react-native';
import { TopNavigation, Text } from 'react-native-ui-kitten';

import style from './../../../styles/main';

class Settings extends React.Component {
  render() {
    return(
      <View style={style.container}>
        <TopNavigation title="Settings" style={style.header}/>
      </View>
    )
  }
}

export default Settings;
