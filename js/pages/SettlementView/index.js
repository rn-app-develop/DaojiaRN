import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import SettleSubmit from './SettleSubmit'

export default class SettlementView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>订单结算页</Text>
        <SettleSubmit></SettleSubmit>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
