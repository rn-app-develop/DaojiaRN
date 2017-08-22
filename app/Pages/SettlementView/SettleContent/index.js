import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
import StoreTitle from './StoreTitle'

export default class SettleContent extends Component {
  render() {
    return (
      <View style={styles.settleContentWrapper}>
        <StoreTitle></StoreTitle>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settleContentWrapper: {
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 180,
  },

})
