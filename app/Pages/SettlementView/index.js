import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'
import SettleSubmit from './SettleSubmit'
import ReceiptAddress from './ReceiptAddress'
import DeliverTime from './DeliverTime'
import SettleContent from './SettleContent'
import settleData from './_TestData'

export default class SettlementView extends Component {
  state = {
    settleData: settleData.result
  }

  render() {
    // console.log(this.state.settleData);
    let settleData = this.state.settleData;
    let modulesMap = {}
    for (module of settleData.newModules) {
      modulesMap[module.moduleKey] = module.data
    }
    return (
      <View style={styles.container}>
        <ReceiptAddress
          receiptAddress={modulesMap.receiptAddress}
          ></ReceiptAddress>
        <ScrollView style={styles.scrollView}>
          <DeliverTime
            deliverTime={modulesMap.deliverTime}
            distributionType={settleData.distributionType} >
          </DeliverTime>
          <SettleContent
            {...modulesMap}
            totalWeight={settleData.totalWeight}
            >
          </SettleContent>
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
    paddingBottom: 20,
  },
  scrollView: {
    top: -30,
    marginHorizontal: 10,
    // borderTopWidth: 10,
    // borderColor: 'rgba(73, 179, 77, 0.8)'
  }
});
