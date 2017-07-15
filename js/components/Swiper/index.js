import React, {Component} from 'react'
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  Platform,
  StyleSheet
 } from 'react-native'
import PropTypes from 'prop-types' // 属性枚举
import SwiperWrapper from './SwiperWrapper'

const { width, height } = Dimensions.get('window')

export default class extends Component {
  /**
   * [propTypes Props validation]
   * @type {Object}
   */
  static propTypes = {
    horizontal: PropTypes.bool,
    children: PropTypes.node.isRequired,
    style: View.propTypes.style,
    // pageStyle: View.propTypes.style,
    loop: PropTypes.bool,
    index: PropTypes.number,
    autoplayDirection: PropTypes.bool, // 轮播方向
  }

  /**
   * [defaultProps static attribute default props]
   * @type {Object} props
   */
  static defaultProps = {
    horizontal: true,
  }

  /**
   * [state Init states]
   * @type {Object} states
   */
  state = this.initState(this.props, true)

  /**
   * [autoplayTimer autoplay timer]
   * @type {null}
   */
  autoplayTimer = null
  loopJumpTimer = null

  initState (props, setOffsetInState) {
    // set the current state
    const state = this.state || {}

    const initState = {
      autoplayEnd: false,
      loopJump: false
    }

    const newInternals = {
      isScrolling: false
    }

    initState.total = props.children ? props.children.length || 1 : 0

    if (state.total === initState.total) {
      // retain the index
      initState.index = state.index
    } else {
      setOffsetInState = true // if the index is reset, go ahead and update the offset in state
      initState.index = initState.total > 1 ? Math.min(props.index, initState.total - 1) : 0
    }

    // Default horizontal
    initState.dir = props.horizontal ? 'x' : 'y'
    initState.width = props.width || width
    initState.height = props.height || height
    newInternals.offset = {}

    if (initState.total > 1) {
      let setup = initState.index
      if (props.loop) {
        setup++
      }

      newInternals.offset[initState.dir] = initState.dir === 'y'
        ? initState.height * setup // vertical y axis
        : initState.width * setup // horizontal x axis
    }

    // only update the offset in state if needed, update offset while swiping
    if (setOffsetInState) {
      initState.offset = newInternals.offset
    }

    this.internals = newInternals
    return initState
  }

  componentDidMount () {
    this.autoplay()
  }

  componentWillReceiveProps (nextProps) {
    const sizeChanged = (nextProps.width || width) !== this.state.width ||
                        (nextProps.height || height) !== this.state.height
    if (!nextProps.autoplay && this.autoplayTimer) {
      clearTimeout(this.autoplayTimer)
    }
    this.setState(this.initState(nextProps, sizeChanged))
  }

  // 组件销毁清除定时器
  componentWillUnmount () {
    this.autoplayTimer && clearTimeout(this.autoplayTimer)
    this.loopJumpTimer && clearTimeout(this.loopJumpTimer)
  }

  autoplay = () => {
    if (Array.isArray(this.props.children) ||
      !this.props.autoplay ||
      this.internals.isScrolling ||
      this.state.autoplayEnd
      ) return

    this.autoplayTimer && clearTimeout(this.autoplayTimer)
    this.autoplayTimer = setTimeout(() => {
      // not loop and autoplay end
      if (!this.props.loop && (
        this.props.autoplayDirection
        ? this.state.index === this.state.total - 1
        : this.state.index === 0
      )) return this.setState({autoplayEnd: true})

      //
      this.scrollBy(this.props.autoplayDirection ? 1 : -1)
    }, this.props.autoplayTimeout * 1000)
  }

  scrollBy = () => {

  }

  render () {
    let props = this.props

    return (
      <View style={[styles.container, {
        width: props.width,
        height: props.height
      }]}>
        <SwiperWrapper pageStyle={{width: props.width, height: props.height}}>
          <Text>swiper 1</Text>
          <Text>swiper 2</Text>
          <Text>swiper 3</Text>
        </SwiperWrapper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'relative'
  }

})
