import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
import StoreTitle from './StoreTitle'
import ProductInfo from './ProductInfo'
import MoneyInfo from '../MoneyInfo'
export default class SettleContent extends Component {
  componentDidMount () {
  }

  render() {
    console.log(this.props);
    let {productInfo, totalWeight, moneyInfo, disMoneyInfo} = this.props
    return (
      <View style={styles.settleContentWrapper}>
        <StoreTitle></StoreTitle>
        <ProductInfo
          productInfo={productInfo}
          totalWeight={totalWeight}></ProductInfo>
        <MoneyInfo
          moneyInfo={moneyInfo}
          disMoneyInfo={disMoneyInfo}>
        </MoneyInfo>
        <View><Text>其它组件</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settleContentWrapper: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 15,
    // height: 180,
  },

})
