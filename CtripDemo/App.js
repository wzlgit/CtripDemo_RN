/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainPage from './app/page/main/MainPage'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <MainPage/>
    );
  }
}

const styles = StyleSheet.create({

});
