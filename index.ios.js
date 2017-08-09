/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native'
import './js/utils/interceptors.js'
import DaojiaRN from './js/components/StoreHome/index.js'

console.log("init")

AppRegistry.registerComponent('DaojiaRN', () => DaojiaRN)
