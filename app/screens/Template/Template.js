import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-ui-kitten';

import style from './../../styles/main';

class Home extends React.Component {
  render() {
    return(
      <View style={style.content}>
        <Text>Hello World</Text>
      </View>
    )
  }
}

export default Home;
