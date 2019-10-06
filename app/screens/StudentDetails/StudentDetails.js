import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-ui-kitten';

import Header from './../../components/Header';

import request from './../../utils/request';
import style from './../../styles/main';

class StudentDetails extends React.Component {
  render() {
    let student = this.props.navigation.getParam('student');
    return(
      <View style={style.container}>
        <Header title={student.name} navigation={this.props.navigation} />
        <View style={customStyle.studentHeader}>
          <Avatar source={{ uri: request.route('static/public/'+student.image)}} style={customStyle.studentImage} />
          <View style={{marginTop: 15, marginLeft: 15}}>
            <Text category="h3">{student.name}</Text>
            <Text category="s1">{student.roll_no}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const customStyle = StyleSheet.create({
  studentHeader: {
    flexDirection: 'row',
    padding: 20,
  },
  studentImage: {
    width:124,
    height:124
  },
  studentName: {
  },
  studentRollNo: {

  }
})

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(StudentDetails);
