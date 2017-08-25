import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';
import ProductItem from './ProductItem'
import ContentText from '../ContentText'
import IconArrow from '../IconArrow'

export default class ProductList extends Component {

  constructor (props) {
    super(props)
    let size = this.props.productInfo.length
    let minHeight = size >= 2 ? 140 : size * 70
    let maxHeight = this.props.productInfo.length * 70
    this.state = {
      height: new Animated.Value(minHeight),
      expanded: false,
      minHeight: minHeight,
      maxHeight: maxHeight
    }
  }

  toggle () {
    let state = this.state
    let finalHeight = state.expanded ? state.minHeight : state.maxHeight
    this.setState({
      expanded: !state.expanded
    })

    Animated.timing(
      this.state.height,
      {
        toValue: finalHeight,
        duration: 500
      }
    ).start();
  }

  render() {
    let list = this.props.productInfo.map((val) => {
      return (
        <ProductItem key={val.skuId} item={val}>
        </ProductItem>
      )
    })
    return (
      <View>
        <Animated.View style={{overflow: 'hidden', height: this.state.height}}>
          {list}
        </Animated.View>
        <TouchableWithoutFeedback
          onPress={this.toggle.bind(this)}>
          <View style={styles.totalInfo}>
            <ContentText style={{color: '#888'}}>共{list.length}件 / {this.props.totalWeight}kg</ContentText>
            <IconArrow direction={this.state.expanded ? 'top' : 'bottom'} style={styles.arrow}></IconArrow>
          </View>
        </TouchableWithoutFeedback>
      </View>
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
