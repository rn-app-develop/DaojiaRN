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

import Home from './pages/TabView/Home' // 首页
import Login from './pages/Login' // 登录页
import TabView from './pages/TabView' // 导航
import StoreHome from './components/StoreHome' // 导航
import Icon from 'react-native-vector-icons/Entypo';
import './utils/interceptors'

const myIcon = (<Icon name="back" size={20} color="#900" />)
import nav from './assets/nav4.png'

console.log(nav)
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
          {/* <Scene key='home' component={Home} title='Home' hideNavBar/> */}
          <Scene key='login' component={Login} title='Login'/>
          <Scene key='storeHome' component={StoreHome} title='门店主页'/>
          <Scene key='tabbar' tabs hideNavBar initial
            tabBarStyle={styles.tabBarStyle}
            labelStyle={styles.labelStyle}
            >
            <Scene key='tab1' icon={myIcon} component={Home} title='tab #1' initial hideNavBar></Scene>
            <Scene key='tab2' icon={myIcon} component={TabView} title='tab #2'></Scene>
            <Scene key='tab3' icon={myIcon} component={TabView} title='tab #3'></Scene>
            <Scene key='tab4' icon={myIcon} component={TabView} title='tab #4'></Scene>
            <Scene key='tab5' icon={myIcon} component={TabView} title='tab #5'></Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#bbb',
    paddingBottom: 10,
  },
  labelStyle: {
    fontSize: 14
  }
})
