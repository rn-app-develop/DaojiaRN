import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import Button from 'react-native-button'

export default class SettleSubmit extends Component {
  render() {
    // 旧结算页样式
    // return (
    //   <View style={styles.settleBottomBar}>
    //     <Text style={[styles.text, {flex: 1}]}>已优惠¥88</Text>
    //     <Text style={styles.text}>还需付
    //       <Text style={{color: '#f55'}}>¥118</Text>
    //     </Text>
    //     <Button style={styles.submitBtn}>提交订单</Button>
    //   </View>
    // )

    // 新版结算页样式
    return (
      <View style={styles.settleBottomBar}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  settleBottomBar: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingLeft: 15,
    borderColor: 'transparent'
  },
  text: {
    fontSize: 12,
    color: '#333'
  },
  submitBtn: {
    color: '#fff',
    backgroundColor: '#ff5757',
    marginLeft: 5,
    padding: 15,
    fontSize: 17
  }
});
