/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native'
import './app/utils/interceptors.js'
import DaojiaRN from './app/index.js'
// import DaojiaRN from './app/components/StoreHome/index.js'
// import DaojiaRN from './DaojiaReactNative/App.js'

console.log("init")

AppRegistry.registerComponent('DaojiaRN', () => DaojiaRN)
