import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'
import PropTypes from 'prop-types'

const { width, height } = Dimensions.get('window')
import Swiper from '../Swiper'

export default class Banner extends React.Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor (props) {
    super(props)

    this.state = {
      pageNow: 0
    }
  }

  render() {
    let gap = this.props.firstBanner ? 0 : 10;

    return (

      <Swiper style={styles.wrapper}
        height={this.props.firstBanner ? width * 360 / 750 : width * 232 / 710}
        horizontal={true} autoplay>
        <View style={styles.slide1}>
         <Text style={styles.text}>Hello Swiper</Text>
       </View>
       <View style={styles.slide2}>
         <Text style={styles.text}>Beautiful</Text>
       </View>
       <View style={styles.slide3}>
         <Text style={styles.text}>And simple</Text>
       </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
  },
  bannerItem: {
    flex: 1
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
});
