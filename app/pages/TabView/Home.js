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
import { Actions } from 'react-native-router-flux'
import Button from 'react-native-button'
import Banner from '../../components/common/Banner'

export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.welcome}
          onPress={() => Actions.storeHome({data: 'Custom data'})}>
          去门店主页
        </Button>
        <Button style={styles.welcome}
          onPress={() => Actions.settlement({data: 'Custom data'})}>
          去结算页
        </Button>
        <Button style={styles.instructions}
          onPress={() => Actions.tabbar()}>
          to TabView
        </Button>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Banner></Banner>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    padding: 20,
    backgroundColor: '#ff0'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
