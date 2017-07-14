import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ViewPagerAndroid,
  Platform,
  ActivityIndicator,
  StyleSheet
} from 'react-native'

const { width, height } = Dimensions.get('window')

export default class SwiperWrapper extends Component {
  // var defaultProps = {
  //   ref: 'swiperWrapper'
  // }
  render () {
    console.log(Platform.OS, Dimensions.get('window'), Dimensions.get('screen'));

    let pages = this.props.children.map(
        (element, index) => <View key={index} style={{flex: 1}}>{element}</View>
      )
    if (Platform.OS === 'ios') {
      return (
        <ScrollView
          style={styles.swiper}
          ref='swiperWrapper'
          >
          {pages}
        </ScrollView>
      )
    }

    return (
      <ViewPagerAndroid
        style={[{flex: 1}, styles.swiper]}
        ref='swiperWrapper'
        >
        {pages}
      </ViewPagerAndroid>
    )
  }
}

var styles = StyleSheet.create({
  swiper: {
    backgroundColor: '#fffff0',
    maxHeight: 50,
    width: width,
  },
  text: {
    fontSize: 10
  }
})
