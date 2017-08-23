import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  render() {
    let list = this.props.productInfo.map((val) => {
      return (
        <ProductItem key={val.skuId} item={val}>
        </ProductItem>
      )
    })
    return (
      <View>
        <View>
          {list}
        </View>
        <Text>共{list.length}件/{this.props.totalWeight}kg</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({

})
