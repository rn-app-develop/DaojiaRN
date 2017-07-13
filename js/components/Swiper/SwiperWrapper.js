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
  render () {
    console.log(Platform.OS, Dimensions.get('window'), Dimensions.get('screen'));
    if (Platform.OS === 'ios') {
      return (
        <ScrollView style={styles.swiper}>
          <Text style={styles.text}>ios swiper</Text>
        </ScrollView>
      )
    }

    return (
      <ViewPagerAndroid style={[{flex: 1}, styles.swiper]}>
        <View style={{flex: 1}}>
          <Text style={styles.text}>android swiper</Text>
        </View>
        <View>
          <Text style={styles.text}>android swiper2</Text>
        </View>
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
