import React from 'react';
import { View, Image } from 'react-native';
import { Text, Spinner } from 'react-native-ui-kitten';
import axios from 'axios';

import device from './../../assets/device.png';
import style from './../../styles/main';

import navigationActions from './../../actions/navigationActions';

class Home extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:5000/')
    .then(res => {
      navigationActions.resetNavigation(this, 'Home')
    })
  }
  render() {
    return(
      <View style={style.content}>
        <View style={style.center}>
          <Image source={device} style={{width: 124, height: 124}}/>
          <View style={style.space20}></View>
          <Spinner/>
          <View style={style.space10}></View>
          <Text>Looking for device to connect</Text>
        </View>
      </View>
    )
  }
}

export default Home;
