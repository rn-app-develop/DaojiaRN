import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'
import SettleSubmit from './SettleSubmit'
import SettleAddress from './SettleAddress'
import DeliverTime from './DeliverTime'
import SettleContent from './SettleContent'
export default class SettlementView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SettleAddress></SettleAddress>
        <ScrollView style={styles.scrollView}>
          <DeliverTime></DeliverTime>
          <SettleContent></SettleContent>
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
  scrollView: {
    top: -30,
    marginHorizontal: 10,
  }
});
