import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { TopNavigation, Text, Button } from 'react-native-ui-kitten';

import style from './../../../styles/main';

class Dashboard extends React.Component {
  render() {
    return(
      <View style={style.container}>
        <TopNavigation title="Dashboard" style={style.header}/>
        <View style={[style.contentBackground, {padding: 5}]}>
          <ScrollView>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={[customStyle.block, {backgroundColor: '#3366FF'}]} onPress={e=>this.props.navigation.navigate('AddAttendance')}>
                <Image source={require('./../../../assets/attendance.png')} style={{width:124, height:124}} />
                <Text style={customStyle.blockTitle}>Add Attendance</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[customStyle.block, {backgroundColor: '#3366FF'}]} onPress={e=>this.props.navigation.navigate('Subjects')}>
                <Image source={require('./../../../assets/attendance.png')} style={{width:124, height:124}} />
                <Text style={customStyle.blockTitle}>Subjects</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const customStyle = StyleSheet.create({
  block: {
    flex:1,
    padding:20,
    margin:10,
    backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  blockTitle: {
    color: '#FFF',
    marginTop: 5,
    fontSize: 18,
  }
})

export default Dashboard;
