/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MyComponent extends Component {
  renderMoneyItem () {

  }

  render() {
    let {moneyInfo, disMoneyInfo} = this.props
    return (
      <View style={styles.container}>
        {this.renderMoneyItem(moneyInfo)}
        {this.renderMoneyItem(disMoneyInfo)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
