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
  static propTypes = {
    horizontal: PropTypes.bool,
    children: PropTypes.node.isRequired,
    style: View.propTypes.style,
    pageStyle: View.propTypes.style,
  }

  static defaultProps = {
    horizontal: true,
  }

  state = this.initState(this.props, true)

  initState (props, setOffsetInState) {
    // set the current state
    const state = this.state || {}

    const initState = {
      autoplayEnd: false,
      loopJump: false
    }

    const newInternals = {
      isScrolling: false
    }

    initState.total = props.children ? props.children.length || 1 : 0

    if (state.total === initState.total) {
      // retain the index

    }
  }

  render () {
    console.log(Platform.OS, Dimensions.get('window'), Dimensions.get('screen'))

    let pages = this.props.children.map(
        (element, index) => <View key={index} style={[{flex: 1}, this.props.pageStyle]}>{element}</View>
      )
    if (Platform.OS === 'ios') {
      return (
        <ScrollView
          ref='swiperWrapper'
          {...this.props}
          contentContainerStyle={[styles.wrapper, this.props.style]}
          >
          {pages}
        </ScrollView>
      )
    }

    return (
      <ViewPagerAndroid
        ref='swiperWrapper'
        {...this.props}
        style={{flex: 1}}
        >
        {pages}
      </ViewPagerAndroid>
    )
  }
}

var styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fffff0',
    // maxHeight: 50,
    // width: width,
  },
  text: {
    fontSize: 10
  }
})
