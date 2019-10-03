import React from 'react';
import { View } from 'react-native';
import { Layout, Text } from 'react-native-ui-kitten';

import Header from './../../components/Header';

import style from './../../styles/main';

class AddStudent extends React.Component {
  render() {
    return(
      <View style={style.container}>
        <Header title="Add Student" navigation={this.props.navigation} />
        <Layout style={style.contentBackground}>
          
        </Layout>
      </View>
    )
  }
}


export default AddStudent;
