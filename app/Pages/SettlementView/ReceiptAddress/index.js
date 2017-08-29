import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

import SettlePosition from '../../../Assets/SettlePosition.png'
import AddressText from './AddressText'
import IconArrow from '../IconArrow'
import AddressUser from './AddressUser'
import AddressDetail from './AddressDetail'
import AddressSelect from './AddressSelect'

export default class SettleAddress extends Component {
  render () {
    let props = this.props.receiptAddress

    return (
      <View style={styles.settleAddress}>
        <AddressText style={styles.title}>订单配送至</AddressText>
        {
          props.type === '1'
          ? <AddressDetail address={props.addressVo}></AddressDetail>
          : <AddressSelect title={props.title} isNew={props.type !== '4'}></AddressSelect>
        }

        <IconArrow direction="left" style={styles.backArrow} ></IconArrow>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  settleAddress: {
    // flex: 1,
    paddingTop: 35,
    backgroundColor: '#49b34d',
    paddingBottom: 30,
    // 阴影
  },
  backArrow: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 10,
    top: 35,

  },

  settlePosition: {
    width: 18,
    height: 18,
    marginRight: 10,
    marginTop: 3,
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    paddingBottom: 15
  },
})
