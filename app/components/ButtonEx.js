import React from 'react';
import { View } from 'react-native';
import { Button, Spinner } from 'react-native-ui-kitten';
import { If, Else, Then } from 'react-if';

class ButtonEx extends React.Component {
  render() {
    return(
      <View style={{alignItems:'center', marginTop: 30}}>
        <If condition={this.props.process}>
          <Then>
            <Spinner />
          </Then>
          <Else>
            <Button
              style={{width: '100%'}}
              onPress={e=> this.props.onPress()}
              >{this.props.text}</Button>
          </Else>
        </If>
      </View>
    )
  }
}

export default ButtonEx;
