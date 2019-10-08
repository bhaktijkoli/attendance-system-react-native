import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Layout, Text } from 'react-native-ui-kitten';
import { Button, Input } from 'react-native-ui-kitten';

import Header from './../../components/Header';
import ButtonEx from './../../components/ButtonEx';

import request from './../../utils/request';
import alert from './../../utils/alert';
import style from './../../styles/main';

import authActions from './../../actions/authActions';
import navigationActions from './../../actions/navigationActions';

class AddSubject extends React.Component {
  state = {
    name: '',
    process: false,
  }
  render() {
    return(
      <View style={style.container}>
        <Header title="Add Subject" navigation={this.props.navigation} />
        <Layout style={style.content}>
          <Input
            label="Name"
            value={this.state.name}
            placeholder="Applied Mathematics 2"
            style={style.mgt10}
            returnKeyType="done"
            onChangeText={name => this.setState({name})}
            />
          <ButtonEx process={this.state.process} text="ADD SUBJECT" onPress={this.onAddSubject}/>
        </Layout>
      </View>
    )
  }
  onAddSubject = () => {
    this.setState({process: true})
    request.post('subjects', this.state)
    .then(res => {
      authActions.getSubjects();
      this.setState({process: false})
      alert.showOkDailog('Add Subject', 'Subject successfully added.', () => {
        this.props.navigation.navigate('Subjects')
      })
    })
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(AddSubject);
