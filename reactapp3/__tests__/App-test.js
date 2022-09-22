/**
 * @jest-environment jsdom
 */
//needed to specify because it didnt like render
import 'react-native';
import React from 'react';
import App from '../App';
import "@testing-library/jest-dom";
import ReactDOM from "react-dom";
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'

it('renders correctly', () => {
 renderer.create(<App />);
});
