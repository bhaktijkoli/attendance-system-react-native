import React from 'react';
import { View, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Layout, Text, Input, Button } from 'react-native-ui-kitten';
import ImagePicker from 'react-native-image-picker';

import Header from './../../components/Header';

import authActions from './../../actions/authActions';
import navigationActions from './../../actions/navigationActions';

import style from './../../styles/main';
import request from './../../utils/request';

const imageOptions = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class AddStudent extends React.Component {
  state = {
    name: 'Some 1',
    roll_no: '11',
    image: null,
  }
  render() {
    return(
      <View style={style.container}>
        <Header title="Add Student" navigation={this.props.navigation} />
        <Layout style={style.content}>
          <Input
            label="Fullname"
            value={this.state.name}
            placeholder="Bhaktij Koli"
            style={style.mgt10}
            onChangeText={name => this.setState({name})}
            />
          <Input
            label="Roll Number"
            value={this.state.roll_no}
            placeholder="22"
            style={style.mgt10}
            onChangeText={roll_no => this.setState({roll_no})}
            />
          <Button
            style={style.mgt20}
            onPress={this.onAddImage}
            >UPLOAD IMAGE</Button>
          <Button
            style={style.mgt20}
            onPress={this.onAddStudent}
            >ADD STUDENT</Button>
        </Layout>
      </View>
    )
  }
  onAddImage = () => {
    ImagePicker.showImagePicker(imageOptions, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({
          image: { uri: response.uri, name: response.fileName, type: response.type },
        });
      }
    });
  }
  onAddStudent = () => {
    let data = new FormData();
    data.append('name', this.state.name)
    data.append('roll_no', this.state.roll_no)
    data.append('image', this.state.image)
    request.post('students', data)
    .then(res => {
      Alert.alert(
        'Add Student',
        'Student successfully added.',
        [
          {text: 'Ok', onPress: () => navigationActions.resetNavigation(this, 'Home') },
        ],
        {cancelable: false},
      )
      authActions.getStudents();
    })
  }
}


export default AddStudent;
