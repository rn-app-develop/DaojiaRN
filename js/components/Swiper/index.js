import React, {Component} from 'react'
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  Platform,
  StyleSheet
 } from 'react-native'
import PropTypes from 'prop-types' // 属性枚举

export default class extends Component {
  render () {
    return (
      <ScrollView style={styles.swiper}>
        <View><Text>Hello Swiper!!</Text></View>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  swiper: {
    backgroundColor: 'red',
    maxHeight: 50
  }
})
