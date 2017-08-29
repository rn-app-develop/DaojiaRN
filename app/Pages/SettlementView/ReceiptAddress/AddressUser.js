/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import AddressText from './AddressText'

export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.userInfo}>
        {/* 收货人信息 */}
        <AddressText style={[styles.userInfoText, {paddingRight: 15}]}>徐珊</AddressText>
        <AddressText style={styles.userInfoText}>187****0623</AddressText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userInfo: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingLeft: 55
  },
  userInfoText: {
    fontSize: 14
  }
});
