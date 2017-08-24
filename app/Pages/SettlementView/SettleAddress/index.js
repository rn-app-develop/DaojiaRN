import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

import SettlePosition from '../../../Assets/SettlePosition.png'
import AddressText from './AddressText'
import IconArrow from '../IconArrow'
export default class SettleAddress extends Component {
  render () {
    return (
      <View style={styles.settleAddress}>
        <AddressText style={styles.title}>订单配送至</AddressText>
        <View style={styles.addressDetail}>
          {/* 收货人地址 */}
          <Image style={styles.settlePosition} source={SettlePosition}></Image>
          <AddressText style={styles.addressName}>北京市大兴区荣京中街朝林广场A座</AddressText>
          {/* 切换地址图标 */}
          <IconArrow style={styles.addressEdit} ></IconArrow>
        </View>
        <View style={styles.userInfo}>
          {/* 收货人信息 */}
          <AddressText style={[styles.userInfoText, {paddingRight: 15}]}>徐珊</AddressText>
          <AddressText style={styles.userInfoText}>187****0623</AddressText>
        </View>
        <IconArrow direction="left" style={styles.backArrow} ></IconArrow>
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
    // 阴影
  },
  backArrow: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 10,
    top: 35,

  },
  title: {
    textAlign: 'center',
    alignSelf: 'center'
  },
  settlePosition: {
    width: 18,
    height: 18,
    marginRight: 10,
    marginTop: 3,
  },
  addressDetail: {
    paddingHorizontal: 25,
    paddingTop: 15,
    flexDirection: 'row',
  },
  addressName: {
    flex: 1,
  },
  addressEdit: {
    width: 16,
    height: 16,
    marginLeft: 35,
    marginTop: 3,
  },
  userInfo: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingLeft: 55
  },
  userInfoText: {
    fontSize: 14
  }
})
