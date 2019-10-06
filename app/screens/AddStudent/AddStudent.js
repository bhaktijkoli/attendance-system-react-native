import React from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Layout, Text, Input, Button, Icon, Spinner } from 'react-native-ui-kitten';
import { If, Else, Then } from 'react-if';
import ImagePicker from 'react-native-image-crop-picker';

import Header from './../../components/Header';
import ButtonEx from './../../components/ButtonEx';

import authActions from './../../actions/authActions';
import navigationActions from './../../actions/navigationActions';

import style from './../../styles/main';
import request from './../../utils/request';

import profile from './../../assets/profile.png';

class AddStudent extends React.Component {
  state = {
    name: 'Vishal',
    roll_no: '1',
    image: null,
    process: false,
  }
  render() {
    return(
      <View style={style.container}>
        <Header title="Add Student" navigation={this.props.navigation} />
        <Layout style={style.content}>
          <TouchableOpacity
            onPress={this.onAddImage}>
            <If condition={this.state.image == null}>
              <Then>
                <View
                  style={{
                    width: 256,
                    height: 256,
                    alignSelf: 'center',
                    borderWidth: 2,
                    borderColor: '#3366ff',
                    borderRadius: 128,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 40,
                    backgroundColor: 'white'
                  }}
                  >
                  <Image source={profile} style={{width: 156, height: 156}}/>
                </View>
              </Then>
              <Else>
                <Image
                  source={this.state.image}
                  style={{
                    width: 256,
                    height: 256,
                    alignSelf: 'center',
                    marginBottom: 40,
                    borderRadius: 128,
                    backgroundColor: 'white'
                  }}
                  />
              </Else>
            </If>
          </TouchableOpacity>
          <Input
            label="Fullname"
            value={this.state.name}
            placeholder="Bhaktij Koli"
            style={style.mgt10}
            returnKeyType="next"
            onChangeText={name => this.setState({name})}
            />
          <Input
            label="Roll Number"
            keyboardType="numeric"
            value={this.state.roll_no}
            placeholder="22"
            style={style.mgt10}
            returnKeyType="done"
            onChangeText={roll_no => this.setState({roll_no})}
            />
          <ButtonEx process={this.state.process} text="ADD STUDENT" onPress={this.onAddStudent}/>
        </Layout>
      </View>
    )
  }
  onAddImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
      useFrontCamera: true,
      cropperActiveWidgetColor: '#3366FF'
    }).then(response => {
      this.setState({
        image: { uri: response.path, name: response.filename, type: response.mime },
      });
    });
  }
  onAddStudent = () => {
    let data = new FormData();
    this.setState({process: true})
    data.append('name', this.state.name)
    data.append('roll_no', this.state.roll_no)
    data.append('image', this.state.image)
    console.log(data);
    request.post('students', data)
    .then(res => {
      authActions.getStudents();
      this.setState({process: false})
      Alert.alert(
        'Add Student',
        'Student successfully added.',
        [
          {text: 'Ok', onPress: () => navigationActions.resetNavigation(this, 'Home') },
        ],
        {cancelable: false},
      )
    })
  }
}

const ImageIcon = (style) => (
  <Icon {...style} name='image-outline' />
);

export default AddStudent;
