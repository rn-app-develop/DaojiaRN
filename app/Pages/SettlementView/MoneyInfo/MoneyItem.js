/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ContentText from '../ContentText'

export default class MoneyItem extends Component {
  render() {
    let item = this.props.item
    return (
      <View style={styles.container}>
        <ContentText>{item.name}</ContentText>
        <ContentText style={{color: item.color}}>{item.value}</ContentText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
});
