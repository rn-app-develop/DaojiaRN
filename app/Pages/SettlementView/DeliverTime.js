import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class DeliverTime extends Component {
  render () {
    return (
      <View style={styles.deliverTime}>
        <Text>达达专送</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deliverTime: {
    // width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderColor: '#e8e8e8',
    position: 'relative',
    // position: 'absolute',
    top: -30,
  }
})
