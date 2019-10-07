import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Layout, Text } from 'react-native-ui-kitten';
import { List, ListItem, Button, Icon } from 'react-native-ui-kitten';

import Header from './../../components/Header';

import request from './../../utils/request';
import style from './../../styles/main';

import authActions from './../../actions/authActions';
import navigationActions from './../../actions/navigationActions';

class Subjects extends React.Component {
  componentDidMount() {
    authActions.getSubjects();
  }
  render() {
    let subjects = this.props.auth.subjects
    return(
      <View style={style.container}>
        <Header title="Subjects" navigation={this.props.navigation} />
        <Layout style={style.contentBackground}>
          <List
            data={subjects}
            renderItem={(data) => {
              let subject = data.item;
              return(
                <ListItem
                  title={`${data.index+1}     ${subject.name}`}
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
            onPress={e=>this.props.navigation.navigate('AddSubject')}
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

export default connect(mapStateToProps)(Subjects);
