import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Text, Icon } from 'react-native-ui-kitten';

import Header from './../../components/Header';

import request from './../../utils/request';
import style from './../../styles/main';

import authActions from './../../actions/authActions';
import navigationActions from './../../actions/navigationActions';

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
        <View style={style.contentBackground}>
          <View style={customStyle.studentFooter}>
            <Button status="danger" icon={TrashIcon} onPress={this.onPressDelete}>
              DELETE
            </Button>
          </View>
        </View>
      </View>
    )
  }
  onPressDelete = () => {
    let student = this.props.navigation.getParam('student');
    request.delete('students',{data: {student:student.id}})
    .then(res => {
      authActions.getStudents();
      this.props.navigation.navigate('Students')
    })
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
  studentFooter: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
  },
})

const TrashIcon = (style) => (
  <Icon {...style} name='trash' />
);

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(StudentDetails);
