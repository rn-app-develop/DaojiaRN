import React, { PureComponent } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import ContentText from './ContentText'
import RMB from './RMB'

export default class ProductItem extends PureComponent {
  render() {
    let item = this.props.item
    return (
      <View style={styles.productItem} >
        <Image style={styles.productImg} source={{uri: item.img}}></Image>
        <View style={styles.productInfo}>
          <ContentText numberOfLines={1}>{item.name}</ContentText>
          <ContentText><RMB></RMB>{item.money / 100} × {item.quantity}</ContentText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 15,
    overflow: 'hidden'
  },
  productImg: {
    width: 50,
    height: 50,
    marginRight: 5,
    backgroundColor: '#f4f4f4'
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 2,
  }
})
