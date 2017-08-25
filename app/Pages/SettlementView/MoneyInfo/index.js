/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import MonyerItem from './MoneyItem'

export default class MyComponent extends Component {
  renderMoneyItem (moneyInfo) {
    return moneyInfo.map((val, index) => {
      return (
        <MonyerItem key={val.name} item={val}></MonyerItem>
      )
    })
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
