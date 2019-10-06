import React from 'react';
import { View, Image, Alert } from 'react-native';
import { Text, Spinner } from 'react-native-ui-kitten';
import Zeroconf from 'react-native-zeroconf'
import axios from 'axios';

import device from './../../assets/device.png';
import style from './../../styles/main';

import authActions from './../../actions/authActions';
import navigationActions from './../../actions/navigationActions';

const zeroconf = new Zeroconf()
let deviceFound = false;

class Home extends React.Component {
  componentDidMount() {
    zeroconf.scan(type = 'http', protocol = 'tcp', domain = 'local.');
    zeroconf.on('start', () => console.log('The scan has started.'))
    zeroconf.on('found', (data) => console.log('Service found ', data))
    zeroconf.on('resolved', (data) => {
      console.log(data);
      if(data.name == "Attendance System") {
        let address = data.addresses[data.addresses.length-1];
        axios.get(`http://${address}:5000`)
        .then(res => {
          deviceFound = true;
          zeroconf.stop();
          authActions.setHost(address)
          navigationActions.resetNavigation(this, 'Home');
        })
      }
    })
    setTimeout(() => {
      if(!deviceFound) {
        Alert.alert(
          'Device Not Found',
          'Make sure that your device is in same network',
          [
            {
              text: 'Retry',
              onPress: () => this.componentDidMount(),
            },
          ],
          {cancelable: false},
        );
      }
    }, 10*1000);
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
