import { StackActions, NavigationActions } from 'react-navigation';

module.exports.resetNavigation = (component, routeName) => {
  component.props.navigation.dispatch(StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })],
  }));
}
