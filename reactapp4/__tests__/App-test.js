/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Button from '../Components/Button/content';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
afterEach(cleanup);

// it('renders correctly', () => {
//   renderer.create(<App />);
// });
// test('Button renders correctly + Snapshor', () => {
//   const tree = renderer.create(< />).toJSON();
//   expect(tree).toMatchSnapshot();
//   console.log(tree);
// });
