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
    let props = this.props

    return (
      <View style={[styles.container, {
        width: props.width,
        height: props.height
      }]}>
        <SwiperWrapper pageStyle={{width: props.width, height: props.height}}>
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
  }

})
