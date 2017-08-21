import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

export default class SettleAddress extends Component {
  render () {
    return (
      <View style={styles.settleAddress}>
        {/* <Image style={styles.arrow}></Image> */}
        <View>
          {/* 标题箭头 */}
          <Text style={styles.title}>订单配送至</Text>
        </View>
        <View style={styles.addressDetail}>
          {/* 地址图标 */}
          {/* <Image></Image> */}
          {/* 收货人地址 */}
          <Text style={styles.addressName}>新版结算页地址新版结算页地址新版结算页地址新版结算页地址新版结算页地址新版结算页地址新版结算页地址新版结算页地址新版结算页地址</Text>
          {/* 切换地址图标 */}
          <Text style={styles.addressEdit}> {'>'}</Text>
          {/* <Image></Image> */}
        </View>
        <View style={styles.userInfo}>
          {/* 收货人信息 */}
          <Text style={styles.text}>收货人姓名</Text>
          <Text style={styles.text}>收货人电话</Text>
        </View>
        <Text style={styles.backArrow}>{'<'}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  settleAddress: {
    // flex: 1,
    paddingTop: 35,
    backgroundColor: '#49b34d',
    paddingBottom: 30,
  },
  backArrow: {
    position: 'absolute',
    color: '#fff',
    fontSize: 30,
    left: 10,
    top: 20,
    backgroundColor: "transparent"
  },
  title: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  },
  addressDetail: {
    paddingLeft: 25,
    paddingTop: 15,
    flexDirection: 'row'
  },
  addressName: {
    flex: 1,
    color: '#fff',
  },
  addressEdit: {
    width: 55,
    fontSize: 16,
    color: '#fff',
    paddingRight: 25,
    textAlign: 'right'
  },
  text: {
    fontSize: 14,
    color: '#fff'
  },
  userInfo: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingLeft: 25,
    paddingBottom: 15
  }
})
