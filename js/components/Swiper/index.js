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
import SwiperWrapper from './SwiperWrapper'

export default class extends Component {
  render () {
    return (
      <View style={[styles.container]}>
        <SwiperWrapper>
          <Text>swiper 1</Text>
          <Text>swiper 2</Text>
          <Text>swiper 3</Text>
        </SwiperWrapper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'relative'
  },

})
