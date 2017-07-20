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

import Home from './pages/Home' // 首页
import Login from './pages/Login' // 登录页
import TabView from './pages/TabView' // 导航

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
          <Scene key='tabbar' tabs tabBarStyle={styles.tabBarStyle} hideNavBar>
            <Scene key='tab1' component={TabView} title='tab #1' initial></Scene>
            <Scene key='tab2' component={TabView} title='tab #2'></Scene>
            <Scene key='tab3' component={TabView} title='tab #3'></Scene>
            <Scene key='tab4' component={TabView} title='tab #4'></Scene>
            <Scene key='tab5' component={TabView} title='tab #5'></Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#bbb'
  }
})
