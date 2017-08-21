import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

import FowordArrow from '../../Assets/FowordArrow.png'

class AddressText extends PureComponent {
  static propTypes = {
    style: Text.propTypes.style
  }

  render () {
    return (
      <Text
        style={[{color: '#fff', fontSize: 16}, this.props.style]}>
        {this.props.children}
      </Text>
    )
  }
}

export default class SettleAddress extends Component {
  render () {
    return (
      <View style={styles.settleAddress}>
        <AddressText style={styles.title}>订单配送至</AddressText>
        <View style={styles.addressDetail}>
          {/* 收货人地址 */}
          <AddressText style={styles.addressName}>新版结算页地址新版结算页地址新版结算页地址新版结算页地址新版结算页地址新版结算页地址新版结算页地址新版结算页地址新版结算页地址</AddressText>
          {/* 切换地址图标 */}
          <Image style={styles.addressEdit} source={FowordArrow}></Image>
        </View>
        <View style={styles.userInfo}>
          {/* 收货人信息 */}
          <AddressText style={styles.userInfoText}>收货人姓名</AddressText>
          <AddressText style={styles.userInfoText}>收货人电话</AddressText>
        </View>
        <Image style={styles.backArrow} source={FowordArrow}></Image>
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
    width: 20,
    height: 20,
    position: 'absolute',
    left: 10,
    top: 30,
    transform: [
      {rotateZ: '180deg'}
    ],
    // backgroundColor: "#ff0"
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center'
  },
  addressDetail: {
    paddingLeft: 25,
    paddingTop: 15,
    flexDirection: 'row'
  },
  addressName: {
    flex: 1,
  },
  addressEdit: {
    width: 16,
    height: 16,
    marginLeft: 35,
    marginRight: 25,
  },
  userInfo: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingLeft: 25,
    paddingBottom: 15
  },
  userInfoText: {
    fontSize: 14
  }
})
