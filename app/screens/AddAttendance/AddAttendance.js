import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Spinner, Text } from 'react-native-ui-kitten';
import { If, Then, Else } from 'react-if';

import Header from './../../components/Header';

import request from './../../utils/request';
import style from './../../styles/main';

import authActions from './../../actions/authActions';
import navigationActions from './../../actions/navigationActions';

class AddAttendance extends React.Component {
  state = {
    process: true,
    status: 0,
    list: [],
  }
  componentDidMount() {
    let i = null;
    request.get('train/check')
    .then(res => {
      clearInterval(i)
      this.setState({process:false, list: res.data});
    })
    i = setInterval(function () {
      this.setState({status: this.state.status+1})
    }, 30*1000);
  }
  render() {
    return(
      <View style={style.container}>
        <Header title="Add Attendance" navigation={this.props.navigation}/>
          <If condition={this.state.process}>
            <Then>
              <View style={style.center}>
                <Spinner />
                <Text style={{marginTop: 10}}>{this.print_status()}</Text>
              </View>
            </Then>
            <Else>
              {
                this.state.list.map((item, key) => {
                  return(
                    <Text key={key}>{item}</Text>
                  )
                })
              }
            </Else>
          </If>
      </View>
    )
  }
  print_status = () => {
    switch (this.state.status) {
      case 0:
      return "Processing your request"
      case 1:
      return "Recognizing face data"
      default:
      return "Completing the action"
    }
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(AddAttendance);
