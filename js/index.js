/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst
} from 'react-native-router-flux'

import Home from './pages/Home' // 属性枚举
import Login from './pages/Login' // 属性枚举

// 创建状态管理器 reducer
const reducerCreate = params => {
  const defaultReducer = new Reducer(params)
  return (state, action) => {
    console.log('Action:', action)
    return defaultReducer(state, action)
  }
}

export default class DaojiaRN extends Component {

  render() {
    return (
      <Router createReducer={reducerCreate} tintColor='red'>
        <Scene
          leftButtonTextStyle={{color: 'green'}}
          backButtonTextStyle={{color: 'red'}}>
          <Scene key='home' component={Home} title='Home' hideNavBar/>
          <Scene key='login' component={Login} title='Login'/>
        </Scene>
      </Router>
    )
  }
}
