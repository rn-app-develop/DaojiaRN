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
import settleData from './_TestData'

export default class SettlementView extends Component {
  state = {
    settleData: settleData.result
  }

  render() {
    // console.log(this.state.settleData);
    let settleData = this.state.settleData;
    let modulesMap = new Map()
    for (module of settleData.newModules) {
      modulesMap.set(module.moduleKey, module.data)
    }
    // console.log(modulesMap);
    return (
      <View style={styles.container}>
        <SettleAddress
          ></SettleAddress>
        <ScrollView style={styles.scrollView}>
          <DeliverTime
            deliverTime={modulesMap.get('deliverTime')}
            distributionType={settleData.distributionType} >
          </DeliverTime>
          <SettleContent
            productInfo={modulesMap.get('productInfo')}
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
  },
  scrollView: {
    top: -30,
    marginHorizontal: 10,
    // borderTopWidth: 10,
    // borderColor: 'rgba(73, 179, 77, 0.8)'
  }
});
