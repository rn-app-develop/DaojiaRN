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
import SettleData from './_TestData'

export default class SettlementView extends Component {
  console.log(SettleData);
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
    backgroundColor: '#f4f4f4',
  },
  scrollView: {
    top: -30,
    marginHorizontal: 10,
  }
});
