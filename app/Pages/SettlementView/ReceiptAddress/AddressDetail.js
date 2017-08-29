/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import AddressUser from './AddressUser'

export default class AddressDetail extends Component {
  render() {
    let address = this.props.address
    return (
      <View>
        <View style={styles.addressDetail}>
          {/* 收货人地址 */}
          <Image style={styles.settlePosition} source={SettlePosition}></Image>
          <AddressText style={styles.addressName}>北京市大兴区荣京中街朝林广场A座</AddressText>
          {/* 切换地址图标 */}
          <IconArrow style={styles.addressEdit} ></IconArrow>
        </View>

        <AddressUser address={address}></AddressUser>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
