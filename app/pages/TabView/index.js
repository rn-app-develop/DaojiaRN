/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component, PureComponent } from 'react'

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

import Home from './Home' // 首页
import Content from './Content' // 导航

import TabIcon from '../../components/common/TabView/TabIcon'

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#eee',
    paddingBottom: 0,
  },
  labelStyle: {
    fontSize: 12,
    // color: '#555',
    paddingBottom: 5
  }
})

export default (
  <Scene key='tabbar' tabs hideNavBar initial
    tabBarStyle={styles.tabBarStyle}
    labelStyle={styles.labelStyle}
    activeTintColor='#39ac69'
    inactiveTintColor='#555'
    activeBackgroundColor='#ddd'
    gestureEnabled={true}
    showLabel={true}
    >
    <Scene key='home' tabBarLabel='首页' icon={TabIcon} iconType="home" component={Home} title='tab #1' initial hideNavBar></Scene>
    <Scene key='discover' tabBarLabel='福利' icon={TabIcon} iconType="discover" component={Content} title='tab #2'></Scene>
    <Scene key='cart' tabBarLabel='购物车' icon={TabIcon} iconType="cart" component={Content} title='tab #3'></Scene>
    <Scene key='order' tabBarLabel='订单' icon={TabIcon} iconType="order" component={Content} title='tab #4'></Scene>
    <Scene key='my' tabBarLabel='我的' icon={TabIcon} iconType="my" component={Content} title='tab #5'></Scene>
  </Scene>
)
