import React from 'react';
import { Modal, View } from 'react-native';
import { Spinner } from 'react-native-ui-kitten';

class Loader extends React.Component {
  render() {
    return(
      <Modal
        animationType={'none'}
        visible={this.props.visible}
        transparent={true}
        >
        <View style={{backgroundColor: '#00000050', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Spinner />
        </View>
      </Modal>
    )
  }
}

export default Loader;
