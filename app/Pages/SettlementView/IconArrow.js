import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

import FowordArrow from '../../Assets/FowordArrow.png'

export default class IconArrow extends Component {
  static propTypes = {
    direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
  }

  getDegVal (direction) {
    console.log(direction);
    let degVal = 0
    switch (direction) {
      case 'bottom':
        degVal = 90
        break;
      case 'top':
        degVal = -90
        break;
      case 'left':
        degVal = 180
        break;
      default:
        0
    }

    return degVal
  }

  render () {
    let props = this.props

    return (
      <Image style={[
        styles.iconArrow,
        {
          transform: [
            {
              rotateZ: `${this.getDegVal(props.direction)}deg`}
          ]
        },
        props.style
      ]} source={FowordArrow}></Image>
    )
  }
}

const styles = StyleSheet.create({
  iconArrow: {
    width: 15,
    height: 15
  }
})
