import React, { Component } from 'react'

import {
  View,
  Text
} from 'react-native'

export default class Login extends Component {
  render () {
    return (
      <View {...this.props} style={{flex: 1}}>
        <Text>Login page</Text>
      </View>
    )
  }
}
