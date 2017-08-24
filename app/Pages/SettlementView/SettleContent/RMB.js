import React, { PureComponent } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

export default class RMB extends PureComponent {
  render() {
    let props = this.props
    return (
      <Text
        style={[styles.text, props.style]} >¥</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 10
  }
})
