import React, { Component } from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet
} from 'react-native';

import ContentText from './ContentText'
import IconClose from '../../Assets/X.png'

export default class AlertFreight extends Component {

  // state = {
  //   modalVisible: false,
  // }

  render() {
    let {childMoneyList, title, descText, value} = this.props

    let freightList = childMoneyList.map((val) => {
      return (
        <View key={val.name} style={styles.freightItem}>
          <ContentText>{val.name}</ContentText><ContentText>{val.value}</ContentText>
        </View>
      )
    })

    return (
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            this.props.setModalVisible(false)
          }}
          >
         <View style={styles.mask}>
          <View style={styles.alertWrapper}>
            {/* 一级标题 */}
            <ContentText style={styles.alertTitle}>{title}</ContentText>

            {/* 总计 */}
            <View style={[styles.freightItem, styles.freightTotal]}>
              <ContentText style={{fontWeight: 'bold'}}>总计</ContentText><ContentText>{value}</ContentText>
            </View>

            {freightList}

            {descText ? (
              <View style={styles.descContainer}>
                <ContentText style={styles.descTextTitle}>说明</ContentText>
                <ContentText style={styles.descText}>{descText.replace('<br/>', '\n')}</ContentText>
              </View>
            ) : null }
            <TouchableOpacity style={styles.closeBtn} onPress={() => {
              this.props.setModalVisible(false)
            }}>
            <Image style={styles.iconClose} source={IconClose}></Image>
          </TouchableOpacity>
          </View>
         </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
  mask: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  alertWrapper: {
    backgroundColor: '#fff',
    flex: 0.8,
    borderRadius: 8,
    padding: 20,
  },
  alertTitle: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
    paddingBottom: 40
  },
  freightItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 13,
  },
  freightTotal: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#e8e8e8',
    paddingBottom: 20,
    marginBottom: 15
  },
  descContainer: {
    borderTopWidth: 0.5,
    borderTopColor: '#e8e8e8',
    paddingVertical: 12,
  },
  descTextTitle: {
    fontWeight: 'bold',
    paddingBottom: 12
  },
  descText: {
    fontSize: 11,
    color: '#999'
  },
  closeBtn: {
    position: 'absolute',
    bottom: -60,
    alignSelf: 'center',
  },
  iconClose: {
    width: 40,
    height: 40,
  }
});
