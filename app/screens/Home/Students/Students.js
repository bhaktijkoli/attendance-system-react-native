import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { TopNavigation, Layout, Text } from 'react-native-ui-kitten';
import { List, ListItem, Button, Icon } from 'react-native-ui-kitten';

import authActions from './../../../actions/authActions';
import style from './../../../styles/main';

class Students extends React.Component {
  constructor(props) {
    super(props)
    authActions.getStudents();
  }
  render() {
    let students = this.props.auth.students;
    return(
      <View style={style.container}>
        <TopNavigation title="Students" style={style.header}/>
        <Layout style={style.contentBackground}>
          <List
            data={students}
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

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Students);
