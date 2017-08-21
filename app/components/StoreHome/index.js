import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    ScrollView,
    StyleSheet,
    Dimensions,
    Animated,
    Easing,
    TouchableWithoutFeedback
} from 'react-native'
import StoreCoupon from './StoreCoupon.js'
import StoreTitle from './StoreTitle.js'
import StoreComment from './StoreComment.js'
import StoreInfo from './StoreInfo.js'
import StoreSearch from './StoreSearch.js'
import AsideMenu from './AsideMenu.js'
import StoreList from './StoreList.js'
import { getStoreDetail } from '../../utils/apiHelper.js'

const winW = Dimensions.get('window').width
const winH = Dimensions.get('window').height
const posTop = 101
export default class StoreHome extends Component {
    // static defaultProps = {
    //     autoPlay: false,
    //     maxLoops: 10,
    // };
    // static propTypes = {
    //     autoPlay: React.PropTypes.bool.isRequired,
    //     maxLoops: React.PropTypes.number.isRequired,
    //     posterFrameSrc: React.PropTypes.string.isRequired,
    //     videoSrc: React.PropTypes.string.isRequired,
    // }; 

    constructor () {
        super()
        this.state = {
            isScroll: false,
            amHeight: posTop,
            articleHeight: winH - posTop,
            yPosition: new Animated.ValueXY({x: 0, y: posTop})
        }
        
        getStoreDetail().then((resp) => {
          console.log(resp)
        }).catch((error) => {
          console.log(error)
        })
        
    }
    componentDidUpdate () {

        Animated.parallel([
            Animated.timing(this.state.yPosition, {
                toValue: {x: 0, y: this.state.amHeight},
                duration: 400
            }),
            // Animated.timing(this.state.articleHeight, {
            //     toValue: winH - this.state.amHeight,
            //     duration: 400
            // })
        ]).start()
        
    }
    switchScroll () {
        this.setState(previousState => {
             return { isScroll: true };
        });
        this.state.amHeight = winH
    }
    ToScroll () {
        // ScrollView回到顶部位置
         _scrollView.scrollTo({y: 0, animated: false})

        this.setState(previousState => {
             return { isScroll: false };
        });
        this.state.amHeight = posTop
    }
    render () {    
        return (
            <View style={{flex: 1}}>
            <ScrollView scrollEnabled = {this.state.isScroll} ref={(scrollView) => { _scrollView = scrollView; }}>
            
                <Image source={{uri: 'https://static-o2o.360buyimg.com/daojia/new/images/store_industry_1.jpg'}} style={styles.StoreIndusttry1}>
                <View style={styles.StoreHomeWrap}>
                    {/*门店标题*/}
                    <StoreTitle isScroll={this.switchScroll.bind(this)} storeIsFixed={this.state.isScroll}></StoreTitle>
                    <View style={styles.StoreInfoFloor}>
                        {/*门店优惠券*/}
                        <StoreCoupon></StoreCoupon>
                        {/*门店店铺评价*/}
                        <StoreComment></StoreComment>
                        {/*门店店铺信息*/}
                        <StoreInfo></StoreInfo>
                    </View>
            
                </View>
                </Image>
            </ScrollView>
            {/*门店列表*/}      
                
            <Animated.View style={[styles.storeArticleWrap, styles.hasTagsWrap,{
                height: this.state.articleHeight,
                transform: this.state.yPosition.getTranslateTransform()
                //top: this.state.yPosition,     
                }]}>
                    {/*门店店内搜索框*/}
                    <StoreSearch></StoreSearch>
                    <View style={styles.content}>
                        {/*左边分类*/}
                        <AsideMenu></AsideMenu>
                        {/*右边列表分类信息*/}
                        <View style={styles.articleWrap}>
                            <View style={styles.articleTitle}>
                                <Text numberOfLines={1} style={styles.fixTitle}>一次性用品(6)</Text>
                            </View>
                            {/*列表信息*/}
                            <StoreList></StoreList>
                        </View>
                    </View>
                    
            </Animated.View>
            {/*点击继续购物按钮*/}
                
                {this.state.isScroll ? (
                    <TouchableWithoutFeedback onPress={e => {this.ToScroll(e)}}>
                    <View style={styles.gobackStoreBtn}>
                        <View style={styles.gaBackArrowWrap}>
                            <Image source={{uri: 'https://static-o2o.360buyimg.com/daojia/new/images/icon/store_sprites_3.3.png'}}
        style={styles.gaBackArrow} />
                        </View>
                        <Text style={styles.searchText}>点击继续购物</Text>
                    </View>
                    </TouchableWithoutFeedback>
                    ) : null
                }
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    StoreHomeWrap: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20,
        minHeight: winH
    },
    StoreIndusttry1: {
        backgroundColor: '#7bb364',
        flex: 1,
        resizeMode: "stretch"
    },
    StoreInfoFloor: {
        paddingBottom: 35
    },
    storeArticleWrap: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.4,
        // paddingBottom: 45,
        position: 'absolute',
        // top: 101,
        // left: 0,
        // bottom: 0,
        // transform: [{translateX: 0}, {translateY: 0}],
        // transition: transform 400ms ease-in-out;
        zIndex: 10,
        width: winW,
        backgroundColor: '#ffffff'
    },
    hasTagsWrap: {
        // top: 120
    },
    gobackStoreBtn: {
        backgroundColor: '#f2f8f3',
        bottom: 0,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
        width: winW,
        height: 46,
        left: 0,
        position: 'absolute',
        zIndex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    gaBackArrowWrap: {
        height: 8,
        marginBottom: 5,
        width: 15,
        position: 'relative',
        overflow: 'hidden'
    },
    gaBackArrow: {
        position: 'absolute',
        width: 220,
        height: 176,
        left: -15,
        top: -18
    },
    gobackStoreFont: {
        color: '#666666',
        fontSize: 14
    },
    content: {
        flex: 1,
        flexDirection: 'row',
    },
    articleWrap: {
        width: winW - 84
    },
    articleTitle: {
        backgroundColor: '#f4f4f4', 
        height: 30,
        // left: 0,
        paddingLeft: 11,
        // position: 'absolute',
        // top: 0,
        zIndex: 11,
        justifyContent: 'center'
    },
    fixTitle: {
        color: '#666666',
        fontSize: 12
    }
});