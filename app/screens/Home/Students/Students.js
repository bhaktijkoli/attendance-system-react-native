import React from 'react';
import { View } from 'react-native';
import { TopNavigation, Text } from 'react-native-ui-kitten';

import style from './../../../styles/main';

class Students extends React.Component {
  render() {
    return(
      <View style={style.container}>
        <TopNavigation title="Students" style={style.header}/>
          <View style={style.contentBackground}>

          </View>
      </View>
    )
  }
}

export default Students;
