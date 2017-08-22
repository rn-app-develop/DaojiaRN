import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class SettleContent extends Component {
  render() {
    return (
      <View style={styles.storeTitle}>
        <View style={[styles.doubleLine, {marginLeft: 15}]}></View>
        <Text style={styles.storeName}>沃尔玛店</Text>
        <View style={[styles.doubleLine, {marginRight: 15}]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  storeTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15
  },
  doubleLine: {
    flex: 1,
    height: 3,
    marginHorizontal: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
  },
  storeName: {
    fontSize: 15,
    color: '#333'
  }

})
