import React, { PureComponent } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class DeliverTag extends PureComponent {
  render () {
    return (
      <View style={styles.deliverTag}>
        <Text style={styles.deliverTagText}>达达专送</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deliverTagText: {
    color: '#fff',
    fontSize: 10
  },
  deliverTag: {
    borderRadius: 2,
    backgroundColor: '#15a9ff',
    width: 45,
    padding: 2,
  }
})
