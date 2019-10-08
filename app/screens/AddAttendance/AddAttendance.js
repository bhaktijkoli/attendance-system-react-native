import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Layout, Input, Select, Datepicker, Toggle } from 'react-native-ui-kitten';
import { MomentDateService } from '@ui-kitten/moment';
import moment from 'moment';
import ImagePicker from 'react-native-image-crop-picker';
import { If, Then, Else } from 'react-if';

import Header from './../../components/Header';
import ButtonEx from './../../components/ButtonEx';

import request from './../../utils/request';
import style from './../../styles/main';

import authActions from './../../actions/authActions';
import navigationActions from './../../actions/navigationActions';

class AddAttendance extends React.Component {
  state = {
    process: false,
    subject: '',
    date: moment(),
    upload: true,
  }
  dateService = new MomentDateService();
  componentDidMount() {
    authActions.getSubjects();
  }
  render() {
    let subjects = this.props.auth.subjects.map(s=>{return {id: s.id, text:s.name}})
    return(
      <View style={style.container}>
        <Header title="Add Attendance" navigation={this.props.navigation}/>
        <Layout style={style.content}>
          <Select
            style={style.mgt10}
            data={subjects}
            selectedOption={this.state.subject}
            onSelect={subject=>this.setState({subject})}
            />
          <Datepicker
            style={style.mgt10}
            date={this.state.date}
            dateService={this.dateService}
            onSelect={date=>this.setState({date})}
            />
          <Toggle
            style={[style.mgt10, {selfAlign: 'flex-start'}]}
            text="Upload Image"
            checked={this.state.upload}
            onChange={upload => this.setState({upload})}
            />
          <ButtonEx process={this.state.process} text="TAKE ATTENDANCE" onPress={this.onAddAttendanceClick}/>
        </Layout>
      </View>
    )
  }
  onAddAttendanceClick = () => {
    this.setState({process:true})
    let data = new FormData()
    data.append('subject', this.state.subject.id)
    data.append('date', this.state.date.format('YYYY-MM-DD'))
    if(this.state.upload) {
      ImagePicker.openPicker({
        width: 1920,
        height: 1080,
        cropping: true,
      }).then(response => {
        let image = { uri: response.path, name: response.filename, type: response.mime };
        data.append('image', image)
        this.sendRequest(data)
      })
    } else {
      this.sendRequest(data)
    }
  }
  sendRequest = (data) => {
    console.log("SENDING request");
    request.post('attendance', data)
    .then(res => {
      console.log(res.data);
      this.props.navigation.navigate('DisplayAttendance', {data:res.data})
      this.setState({process:false})
    })
  }
  renderModalElement = () => {
    return (
      <Layout
        level='3'
        style={{
          width: 200,
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>This is modal</Text>
      </Layout>
    );
  };
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
