import React, {PureComponent} from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native';
export default class AddressText extends PureComponent {
  static propTypes = {
    style: Text.propTypes.style
  }

  render () {
    let props = this.props
    return (
      <Text
        {...props}
        style={[styles.addressText, props.style]}>
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  addressText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 20
  }
})
