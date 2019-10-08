import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Layout, Text } from 'react-native-ui-kitten';

import Header from './../../components/Header';

import request from './../../utils/request';
import style from './../../styles/main';

import authActions from './../../actions/authActions';
import navigationActions from './../../actions/navigationActions';

class DisplayAttendance extends React.Component {
  render() {
    let {subject, students, date} = this.props.navigation.getParam('data');
    return(
      <View style={style.container}>
        <Header title="Attendance" navigation={this.props.navigation}/>
        <Layout style={style.content}>
          <Text category="h3">{subject.name}</Text>
          <Text category="s1">{date}</Text>
          {
            students.map((item, key) => {
              return(
                <Text key={key}>{item.student.name}          {item.present==1?'P':'A'}</Text>
              )
            })
          }
        </Layout>
      </View>
    )
  }
}

export default DisplayAttendance;
