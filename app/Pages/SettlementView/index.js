import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import SettleSubmit from './SettleSubmit'
import SettleAddress from './SettleAddress'
import DeliverTime from './DeliverTime'

export default class SettlementView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SettleAddress></SettleAddress>
        <ScrollView style={{height: 1000}}>
          <DeliverTime></DeliverTime>
          <View style={{backgroundColor: '#f00'}}><Text>其它模块</Text></View>
        </ScrollView>
        <SettleSubmit></SettleSubmit>
      </View>
    )
  }
}

// 样式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
