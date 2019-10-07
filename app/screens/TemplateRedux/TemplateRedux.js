import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Header from './../../components/Header';

import request from './../../utils/request';
import style from './../../styles/main';

import authActions from './../../actions/authActions';
import navigationActions from './../../actions/navigationActions';

class Template extends React.Component {
  render() {
    return(
      <View style={style.container}>
        <Header title="Template" navigation={this.props.navigation} />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Template);
