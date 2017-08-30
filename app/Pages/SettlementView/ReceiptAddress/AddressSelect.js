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
    marginTop: 15,
    marginBottom: 20,
    borderColor: '#fff',
    borderWidth: 0.5,
    height: 30,
    width: 180,
    // alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    lineHeight: 16,
    // lineHeight: 28
  },
});
