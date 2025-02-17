import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS=='ios'?getStatusBarHeight():0,
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  contentBackground: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  space10: {
    marginTop: 10,
    marginBottom: 10,
  },
  space20: {
    marginTop: 20,
    marginBottom: 20,
  },
  mgt10: {
    marginTop: 10,
  },
  mgt20: {
    marginTop: 20,
  },
});
