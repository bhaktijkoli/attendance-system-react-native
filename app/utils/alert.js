import { Alert } from 'react-native';

module.exports.showOkDailog = (title, body, callback) => {
  Alert.alert(
    title,
    body,
    [
      {text: 'Ok', onPress: () => callback() },
    ],
    {cancelable: false},
  )
}
