import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

import Help from '../../Assets/help.png'
import AlertFreight from './AlertFreight'
export default class IconHelper extends Component {
  static propTypes = {
    direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
  }

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render () {
    return (
      <View>
        <AlertFreight
          modalVisible={this.state.modalVisible}
          setModalVisible={(visible) => {
            console.log('setModalVisible', visible);
            this.setModalVisible(visible)
          }}
          {...this.props}
          ></AlertFreight>
        <TouchableOpacity onPress={() => {
          this.setState({
            modalVisible: true
          })
        }}>
          <Image style={styles.iconHelp} source={Help}></Image>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconHelp: {
    width: 16,
    height: 16,
    tintColor: '#999',
    marginHorizontal: 4
  }
})
