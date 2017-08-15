import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native'

import nav from '../../../assets/nav4.png'

console.log(nav)

export default class TabIcon extends Component {

  static propTypes = {
    selected: PropTypes.bool,
    title: PropTypes.string,
  };
  render () {
    return (
      <View style={styles.iconWrapper}>
        <Image source={nav}
          style={styles.icon} ></Image>
      </View>
    )
    // return (
    //   <Text style={{color: this.props.focused ? 'red' : 'black'}}>
    //     TabIcon {this.props.title}
    //   </Text>
    // )
  }
}

const styles = StyleSheet.create({
  iconWrapper: {
    width: 20,
    height: 20,
    overflow: 'hidden'
  },
  icon: {
    position: 'absolute',
    width: 24,
    height: 600,
    top: -5,
    left: 0

    // width: 26,
    // height: 667
  }
})
