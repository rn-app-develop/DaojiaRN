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
      <SwiperWrapper></SwiperWrapper>
    )
  }
}
