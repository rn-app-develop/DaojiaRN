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
  Tabs,
  ActionConst
} from 'react-native-router-flux'

import Home from './Pages/TabView/Home' // 首页
import Login from './Pages/Login' // 登录页
import TabView from './Pages/TabView' // 导航
import StoreHome from './Components/StoreHome' // 导航
import SettlementView from './Pages/SettlementView' // 导航
// import Icon from 'react-native-vector-icons/Entypo';
import './Utils/interceptors'

// 创建状态管理器 reducer
const reducerCreate = params => {
  const defaultReducer = new Reducer(params)
  return (state, action) => {
    // console.log('Action:', action)
    return defaultReducer(state, action)
  }
}

const getSceneStyle = () => ({
  backgroundColor: 'white',
  shadowOpacity: 1,
  shadowRadius: 3
})

export default class DaojiaRN extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Router createReducer={reducerCreate} tintColor='red' getSceneStyle={getSceneStyle}>
          <Scene
            leftButtonTextStyle={{color: 'green'}}
            backButtonTextStyle={{color: 'white'}}>
            <Scene key='login' component={Login} title='Login'/>
            <Scene key='storeHome' component={StoreHome} title='门店主页'/>
            <Scene key='settlement' component={SettlementView} title='订单结算' hideNavBar/>
            {TabView}
          </Scene>
        </Router>
      </View>
    )
  }
}
