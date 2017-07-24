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
import Swiper from '../../components/Swiper'

export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.welcome}
          onPress={() => Actions.login({data: 'Custom data', title: 'Custom title'})}>
          Welcome to React Native! Welcome to Daojia!
        </Button>
        <Button style={styles.instructions}
          onPress={() => Actions.tabbar()}>
          to TabView
        </Button>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Swiper style={styles.wrapper} height={240}  horizontal={true} autoplay>
          <View style={styles.slide1}>
           <Text style={styles.text}>Hello Swiper</Text>
         </View>
         <View style={styles.slide2}>
           <Text style={styles.text}>Beautiful</Text>
         </View>
         <View style={styles.slide3}>
           <Text style={styles.text}>And simple</Text>
         </View>
        </Swiper>
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
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
});
