import React from 'react';
import { View } from 'react-native';
import { TopNavigation, TopNavigationAction, Icon } from 'react-native-ui-kitten';

import style from './../styles/main';

class Header extends React.Component {
  render() {
    return(
      <TopNavigation
        style={style.header}
        title={this.props.title}
        leftControl={this.renderLeftControl()}
        />
    )
  }
  renderLeftControl = () => {
    return <BackAction onPress={e=>this.props.navigation.goBack()}/>
  }
}

const BackAction = (props) => (
  <TopNavigationAction {...props} icon={BackIcon} />
);

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);


export default Header;
