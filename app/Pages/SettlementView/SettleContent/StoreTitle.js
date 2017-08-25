import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ContentText from '../ContentText'

export default class SettleContent extends PureComponent {
  render() {
    return (
      <View style={styles.storeTitle}>
        <View style={[styles.doubleLine, {marginRight: 12}]}></View>
        <ContentText style={{fontSize: 15}}>沃尔玛店</ContentText>
        <View style={[styles.doubleLine, {marginLeft: 12}]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  storeTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15
  },
  doubleLine: {
    flex: 1,
    height: 3,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
  },
})
