import React from 'react'

import {
  View,
  StyleSheet,
} from 'react-native'

import {
  JDDevice,
  JDRouter,
  JDTouchable,
  JDImage,
  JDJumping,
  JDViewPager
} from 'jdreact-core-lib'

const {
  Router,
  Route,
} = JDRouter

import PropTypes from 'prop-types'

const getDataSource = (data) => {
  let dataSource = new JDViewPager.DataSource({
    pageHasChanged: (p1, p2) => p1 !== p2,
  });
  return dataSource.cloneWithPages(data)
}

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
      <JDViewPager
        style={{
          width: JDDevice.width,
          overflow: 'hidden',
          justifyContent: 'center',
          backgroundColor: '#fff',
          marginTop: gap,
          marginBottom: gap,
          paddingLeft: gap,
          paddingRight: gap,
          height: this.props.firstBanner ? JDDevice.width * 360 / 750 : JDDevice.width * 232 / 710
        }}
        dataSource={getDataSource(this.props.dataSource)}
        renderPage={this._renderPage.bind(this)}
        isLoop={true}
        autoPlay={this.props.firstBanner}
        onChangePage={this._onChangePage.bind(this)}
      />
    );
  }

  _renderPage(data) {
    return (
      <JDTouchable style={styles.bannerItem} onPress={() => {
        // alert('点击图片' + data.linkUrl)
        if (data.floorCellData.params.url) {
          JDJumping.jumpToWeb( data.floorCellData.params.url ).catch(err => alert( err ))
        } else {
          alert(`toDj-${data.floorCellData.to}`)
          this.context.router[`toDj-${data.floorCellData.to}`](
            data.floorCellData.params
          )
        }
      }} >
        <JDImage style={{
            flex: 1,
            resizeMode: 'stretch',
            height: this.props.firstBanner ? JDDevice.width * 360 / 750 : JDDevice.width * 232 / 710,
            width: this.props.firstBanner ? JDDevice.width : JDDevice.width - 20,
          }} source={{uri: data.floorCellData.imgUrl}} />
      </JDTouchable>
    );
  }

  _onChangePage(pageNumber) {
    this.setState({
      pageNow: pageNumber
    });
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: JDDevice.getRpx(40),
  },
  viewPager: {
    width: JDDevice.width,
    overflow: 'hidden',
  },
  bannerItem: {
    flex: 1
  },
});
