import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  ViewPropTypes
} from 'react-native'

import Button from 'react-native-button'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Entypo'

const myIcon = (<Icon name="baidu" size={30} color="#900" />)

export default class TabView extends Component {
  constructor (props) {
    super(props)

    this.fetchData()
  }

  static contextTypes = {
    drawer: PropTypes.object
  }

  static PropTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string
  }

  fetchData () {
    fetch('https://daojia.jd.com/client?functionId=indexh5%2FgetIndex&body=%7B%22address%22%3A%22%E6%8B%9B%E5%95%86%E5%B1%80%E5%A4%A7%E5%8E%A6%22%2C%22city%22%3A%22%E5%8C%97%E4%BA%AC%E5%B8%82%22%2C%22longitude%22%3A116.46316%2C%22latitude%22%3A39.90753%2C%22coordType%22%3A%222%22%2C%22h5From%22%3A%22%22%2C%22isglb%22%3A%22%22%2C%22currentPage%22%3A%22%22%2C%22storeId%22%3A%22%22%2C%22activityId%22%3A%22%22%7D&platCode=H5&appVersion=4.3.0&appName=paidaojia&lng=116.46316&lat=39.90753&city_id=1')
    .then((resp) => resp.json())
    .then((result) => {
      console.log(result)
    })
  }

  comonentDidMount () {
    console.log('mounted')
  }

  render () {
    let props = this.props
    return (
      <View style={[styles.container, props.sceneStyle]}>
        <Button onPress={() => {Actions.pop}}>Back</Button>
        <Text>Tab title: {props.title} name: {props.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    borderWidth: 2,
    borderColor: 'red'
  }
})
