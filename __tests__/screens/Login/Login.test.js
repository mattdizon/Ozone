import 'react-native';
import React from 'react';
import { Login } from '../../../src/screens/Login/Login';
import { MockedNavigator } from '../../../jest/MockedNavigator'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(   <MockedNavigator component={Login} />);
});
