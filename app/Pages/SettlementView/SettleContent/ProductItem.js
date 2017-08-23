import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class ProductItem extends PureComponent {
  render() {
    let item = this.props.item
    return (
      <View style={styles.productItem} >
        <Image style={styles.productImg} source={{uri: item.img}}></Image>
        <View style={styles.productInfo}>
          <Text>{item.name}</Text>
          <Text>{item.money / 100}</Text>
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
    justifyContent: 'space-between',
    marginVertical: 4,
  }
})
