import React, { PureComponent } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import ContentText from '../ContentText'
import RMB from './RMB'

export default class ProductPrice extends PureComponent {
  render() {
    let item = this.props.item

    // 促销价格组
    let promotionMap = new Map()
    item.promotionList.forEach((val) => {
      if (val.promotionType === 1) {
        promotionMap.set('basePrice', <ContentText><RMB></RMB>{val.price / 100} × {val.quantity}</ContentText>)
      } else {
        promotionMap.set('promotionPrice', <ContentText style={{color: '#ff5757'}}><RMB></RMB>{val.price / 100} × {val.quantity}</ContentText>)
      }
    })

    return (
      <View style={styles.productPrice} >

        {/* 左侧单价和促销价格 */}
        <ContentText>
          {promotionMap.get('promotionPrice')}
          {promotionMap.size > 1 ? '  /  ' : null}
          {promotionMap.get('basePrice')}
        </ContentText>

        {/* 右侧总金额信息 */}
        <View style={{flexDirection: 'row'}}>
          {item.storeMoney > item.money ?   <ContentText style={styles.storeMoney}><RMB></RMB>{item.storeMoney / 100}</ContentText> : null}
          <ContentText style={{paddingLeft: 17}}><RMB></RMB>{item.money / 100}</ContentText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  storeMoney: {
    color: '#999',
    textDecorationLine: 'line-through'
  }
})
