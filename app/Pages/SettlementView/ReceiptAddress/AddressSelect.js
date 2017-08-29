/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import AddressText from './AddressText'

export default class AddressSelect extends Component {
  render() {
    let {title, isNew} = this.props
    return (
      <View style={styles.container}>
        <AddressText style={styles.title}>{title}</AddressText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 15,
    paddingBottom: 30
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center'
  },
});
