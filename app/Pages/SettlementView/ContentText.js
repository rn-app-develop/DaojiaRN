import React, { PureComponent } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

export default class ProductItem extends PureComponent {
  render() {
    let props = this.props
    return (
      <Text
        {...props}
        style={[styles.contentText, props.style]} ></Text>
    );
  }
}

const styles = StyleSheet.create({
  contentText: {
    color: '#333',
    fontSize: 14,
    lineHeight: 18
  }
})
