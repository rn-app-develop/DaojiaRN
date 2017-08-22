import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import DeliverTag from './DeliverTag'
import FowordArrow from '../../../Assets/FowordArrow.png'

export default class DeliverTime extends Component {
  render () {
    return (
      <View style={styles.deliverTimeContainer}>
        <DeliverTag></DeliverTag>
        <View style={styles.deliverTimeContent}>
          <Text style={styles.deliverTimeText}>立即送达[预计16:38]</Text>
          <Image style={styles.deliverTimeArrow} source={FowordArrow}></Image>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deliverTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderColor: '#e8e8e8',
    borderRadius: 5,
    // 阴影
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 3},
  },
  deliverTimeContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  deliverTimeText: {
    color: '#2486ff',
    fontSize: 15,
  },
  deliverTimeArrow:{
    width: 15,
    height: 15,
    marginLeft: 10,
    tintColor: '#2486ff'
  }
})
