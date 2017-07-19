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

export default class TabView extends Component {
  constructor (props) {
    super(props)
  }

  static contextTypes = {
    drawer: PropTypes.object
  }

  static PropTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string
  }

  render () {
    let props = this.props
    return (
      <View style={[styles.container, props.sceneStyle]}>
        <Button onPress={() => {Actions.pop}}>Back</Button>
        <Text>Tab title: {props.title} name: {props.name}</Text>
        <Button onPress={() => {Actions.tab1()}}>Switch tab1</Button>
        <Button onPress={() => {Actions.tab2()}}>Switch tab2</Button>
        <Button onPress={() => {Actions.tab3()}}>Switch tab3</Button>
        <Button onPress={() => {Actions.tab4()}}>Switch tab4</Button>
        <Button onPress={() => {Actions.tab5()}}>Switch tab5</Button>
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
    broderColor: 'red'
  }
})
