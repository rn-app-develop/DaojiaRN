import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';
import ProductItem from './ProductItem'
import ContentText from './ContentText'
import IconArrow from '../IconArrow'

export default class ProductList extends Component {
  render() {
    let list = this.props.productInfo.map((val) => {
      return (
        <ProductItem key={val.skuId} item={val}>
        </ProductItem>
      )
    })
    return (
      <Animated.View>
        <View>
          {list}
        </View>
        <View style={styles.totalInfo}>
          <ContentText style={{color: '#888'}}>共{list.length}件/{this.props.totalWeight}kg</ContentText>
          <IconArrow direction='bottom' style={styles.arrow}></IconArrow>
        </View>
      </Animated.View>
    );
  }
}

let styles = StyleSheet.create({
  totalInfo: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    height: 26,
  },
  arrow: {
    tintColor: '#888',
    marginLeft: 10,
  }
})
