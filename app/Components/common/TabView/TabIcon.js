import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native'

import nav from '../../../Assets/nav4.png'

// console.log(nav)

export default class TabIcon extends Component {

  static propTypes = {
    focused: PropTypes.bool,
    iconType: PropTypes.string,
  };

  render () {
    let iconType = this.props.iconType + (this.props.focused ? 'Selected': '')
    // console.log(iconType);
    return (
      <View style={styles.iconWrapper}>
        <Image source={nav}
          style={[styles.icon, styles[iconType]]}></Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconWrapper: {
    width: 22,
    height: 20,
    overflow: 'hidden'
  },
  icon: {
    position: 'absolute',
    width: 24,
    height: 600,
    left: -1
  },
  home: {
    top: -256
  },
  homeSelected: {
    top: -6,
  },
  discover: {
    top: -506
  },
  discoverSelected: {
    top: -556
  },
  cart: {
    top: -358,
  },
  cartSelected: {
    top: -108
  },
  order: {
    top: -406
  },
  orderSelected: {
    top: -156
  },
  my: {
    top: -456
  },
  mySelected: {
    top: -206
  }
})
