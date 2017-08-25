import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
import StoreTitle from './StoreTitle'
import ProductList from './ProductList'

export default class SettleContent extends Component {
  componentDidMount () {
  }

  render() {
    let {productInfo, totalWeight} = this.props
    return (
      <View style={styles.settleContentWrapper}>
        <StoreTitle></StoreTitle>
        <ProductList
          productInfo={productInfo}
          totalWeight={totalWeight}></ProductList>
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
