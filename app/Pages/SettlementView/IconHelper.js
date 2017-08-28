import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

import Help from '../../Assets/help.png'

export default class IconHelper extends Component {
  static propTypes = {
    direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
  }

  render () {
    let props = this.props

    return (
      <Image style={styles.iconHelp} source={Help}></Image>
    )
  }
}

const styles = StyleSheet.create({
  iconHelp: {
    width: 15,
    height: 15,
    tintColor: '#999',
    marginHorizontal: 4
  }
})
