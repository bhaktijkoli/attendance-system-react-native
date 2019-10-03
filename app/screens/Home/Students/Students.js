import React from 'react';
import { View } from 'react-native';
import { TopNavigation, Layout, Text } from 'react-native-ui-kitten';
import { List, ListItem, Button, Icon } from 'react-native-ui-kitten';

import request from './../../../utils/request';
import style from './../../../styles/main';

class Students extends React.Component {
  state = {
    students: [],
  }
  componentDidMount() {
    request.get('students')
    .then(res => {
      this.setState({students: res.data});
    })
  }
  render() {
    return(
      <View style={style.container}>
        <TopNavigation title="Students" style={style.header}/>
        <Layout style={style.contentBackground}>
          <List
            data={this.state.students}
            renderItem={(data, index) => {
              let student = data.item;
              return(
                <ListItem
                  title={`${student.roll_no} ${student.name}`}
                  />
              )
            }}
            />
          <Button
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              position: 'absolute',
              bottom: 25,
              right: 25,
            }}
            size="large"
            icon={AddUserIcon}
            onPress={e=>this.props.navigation.navigate('AddStudent')}
            status='primary'>
          </Button>
        </Layout>
      </View>
    )
  }
}

const AddUserIcon = (style) => (
  <Icon {...style} name='person-add' />
);


export default Students;
