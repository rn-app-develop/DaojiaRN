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

import PropTypes from 'prop-types' // 属性枚举
import Swiper from './components/Swiper'

export default class DaojiaRN extends Component {
  static propTypes = {
    horizontal: PropTypes.bool
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! Welcome to Daojia!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit js/index.js
        </Text>
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
