import React, { PureComponent } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

export default class RMB extends PureComponent {
  render() {
    let { style } = this.props
    return (
      <Text
        style={[styles.text, style]} >¥</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 10
  }
})
