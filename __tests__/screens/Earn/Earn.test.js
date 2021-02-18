import 'react-native';
import React from 'react';
import { Surveys } from '../../../src/screens/Earn/Surveys'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Surveys />);
});
