import React, { Component } from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';

export default class AlertFreight extends Component {

  // state = {
  //   modalVisible: false,
  // }

  render() {
    let {childMoneyList, title, descText, value} = this.props

    return (
      // <View style={{marginTop: 22}}>
        <Modal
          animationType="fade"
          transparent={true}
          // presentationStyle='overFullScreen'
          visible={this.props.modalVisible}
          onRequestClose={() => {
            this.props.setModalVisible(false)
          }}
          >
         <View style={styles.mask}>
          <View style={styles.alertWrapper}>
            <Text style={styles.alertTitle}>{title}</Text>

            <View style={[styles.freightItem, styles.freightTotal]}>
              <Text>总计</Text>
              <Text>{value}</Text>
            </View>

            <TouchableHighlight onPress={() => {
              this.props.setModalVisible(false)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
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

  }
});
