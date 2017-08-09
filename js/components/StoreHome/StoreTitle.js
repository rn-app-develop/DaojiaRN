import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'

export default class StoreTitle extends Component {

    constructor (props) {
        super(props)
        this.state = {
            storeFollow: false, // 门店关注
            tagsMoreHide: true // 直降，满减默认隐藏
        }
    }
    storeHomeCilck (e) {
        // 门店点击
        this.props.isScroll()
    }
    storeFollowCilck (e) {
        // 收藏门店
        this.setState(previousState => {
             return { storeFollow: !previousState.storeFollow };
        });
    }
    showMoreTags (e) {
        this.setState(previousState => {
             return { tagsMoreHide: !previousState.tagsMoreHide };
        });
    }
    render () {    
        return (
            <TouchableWithoutFeedback onPress={e => {this.storeHomeCilck(e)}}>
                <View style={{flexDirection:'column'}}>
                    <View style={styles.StoreTitleWrap}>
                    <Image source={{uri: 'https://img30.360buyimg.com/vendersettle/jfs/t3124/249/5275185508/5631/c1bded84/586cc541N60c513bc.png'}}
       style={styles.storeLogo} />
                    <View style={styles.infoWrap}>
                        <Text  numberOfLines={1} style={styles.infoTitle}>永辉超市-六里桥店永辉超市-六里桥店永辉超市-六里桥店</Text>
                        <View style={styles.deliveryTip}>
                            <Text style={styles.deliveryName}>达达专送</Text>
                            <Text style={styles.LineSplit}>|</Text>
                            <View style={styles.deliveryTimeRadius}>
                                <Text style={styles.deliveryTimeClose}>45分钟</Text>
                            </View>
                        </View>
                        <View style={styles.deliveryTip}>
                            <Text numberOfLines={1} style={styles.basicPrice}>基础运费5元</Text>
                        </View>
                    </View>
                     {/*门店收藏*/}
                    <TouchableWithoutFeedback onPress={e => {this.storeFollowCilck(e)}}>
                        <View style={styles.storeFollow}>
                        <Image source={{uri: 'https://static-o2o.360buyimg.com/daojia/new/images/store/focus.png'}}
    style={[styles.storeFollowImg, this.state.storeFollow ? styles.clolectionActive : '']} />
                        </View>
                    </TouchableWithoutFeedback>
                    
                    {!this.props.storeIsFixed ? (
                        <View>
                            {/*门店信息标题*/}
                            <View style={styles.StoreShowBgTitle} >
                                <Text style={styles.StoreShowBgName}>店铺信息</Text>
                                <View style={styles.ArrowUp}></View>
                            </View>
                            {/*门店信息标题*/}
                            <View style={styles.tagNumWrap}>
                                <Text style={styles.tagTotalTitle}>6个活动</Text>
                                <View style={styles.ArrowMoreUp}></View>
                            </View>
                        </View>
                        ) : null
                    }
                    
                </View>
                {/*活动信息列表*/}
                <View style={styles.listTagWrap}>
                    <View style={styles.listTagUl}>
                        <View style={styles.listTagLi}>
                            <View style={[styles.tagIconWrap,{backgroundColor: '#5CA7FF'}]}>
                                <Text style={styles.tagIcon}>直降</Text>
                            </View>
                            <View>
                                <Text numberOfLines={2} style={styles.tagDes}>购买指定商品，可得赠品</Text>
                            </View>                          
                        </View>                     
                    </View>
                </View>
                <View style={styles.showTagMoreWrap}>
                    <TouchableWithoutFeedback onPress={e => {this.showMoreTags(e)}}>
                        {this.state.tagsMoreHide ? (
                            <View style={styles.showTagMoreBg}>
                                <Text style={styles.showTagMore}>查看更多</Text>
                                <View style={styles.ArrowMoreUp}></View>
                            </View>
                        ) : (
                           <View style={styles.showTagMoreBg}>
                                <Text style={styles.showTagMore}>点击收起</Text>
                                <View style={styles.ArrowMoreDown}></View>
                            </View>
                        )}
                    </TouchableWithoutFeedback>
                </View>
                {/*门店公告*/}
                <View style={styles.noticeTipsWrap}>
                    <View style={styles.noticeTips}>
                        <View style={styles.noticeTitleWrap}>
                            <Text style={styles.noticeTipsTitle}>公告</Text>
                        </View>
                        <View>
                            <Text style={styles.tipsFont}>邻家便利店，为您提供更多便利。</Text>
                        </View>
                    </View>
                </View>
             </View>
        </TouchableWithoutFeedback>
        )
    }
}
const deliveryText = {
        fontSize: 10,
        color: '#fff'
    }
const ArrowPublic = {
        width: 6,
        height: 6,
        borderStyle:'solid',
        borderWidth: 1,
        borderTopColor:'transparent',//下箭头颜色
        borderLeftColor:'transparent',//右箭头颜色
        borderBottomColor:'#fff',//上箭头颜色
        borderRightColor:'#fff',//左箭头颜色
        transform: [{rotate: '45deg'}]
}
const styles = StyleSheet.create({
    StoreTitleWrap: {
       color: '#ffffff',
       minHeight: 62,
       position: 'relative',
       flexDirection:'row',
    },
    storeLogo: {
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.8)',
        width: 55,
        height: 55,
        marginTop: 6,
        marginLeft: 2
    },
    infoWrap: {
        flex: 1,
        flexDirection: 'column',
        lineHeight: 20,
        minHeight: 64,
        paddingLeft: 10,
        paddingRight: 58,
        backgroundColor: 'transparent'
    },
    infoTitle: {
        color: '#fff',
        fontSize: 18,
        lineHeight: 28,
        paddingTop: 2
    },
    deliveryTip: {
      flexDirection:'row'
    },
    LineSplit: {
        ...deliveryText,
        width: 1,
        height: 10,
        paddingLeft: 6,
        paddingRight: 6,
    },
    deliveryName: {
        ...deliveryText,
        marginRight: 4
    },
    deliveryTimeRadius: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 3,
        paddingLeft: 4,
        paddingRight: 4,
        marginLeft: 4,
        paddingTop: 1,
        paddingBottom: 1
    },
    deliveryTimeClose: {
        ...deliveryText,
    },
    basicPrice: {
        ...deliveryText
    },
    storeFollow: {
        position: 'absolute',
        top: 6,
        right: 2,
        width: 24,
        height: 20,
        overflow: 'hidden',
        // backgroundColor: '#eeeeee'
    },
    storeFollowImg: {
        position: 'absolute',
        top: 0,
        left: 0, 
        // resizeMode: Image.resizeMode.center,
        flex: 1,
        width: 64,
        height: 64
    },
    clolectionActive: {
        top: -43,
        left: 0, 
    },
    StoreShowBgTitle: {
        position: 'absolute',
        right: 0,
        width: 57,
        height: 16,
        top: 42,
        paddingLeft: 5,
        borderRadius: 4,
        backgroundColor: 'rgba(70, 70 , 70, 0.5)'
    },
    StoreShowBgName: {
        flex: 1,
        textAlign: 'left',
        color: '#FFF',
        fontSize: 10,
        lineHeight: 14
    },
    ArrowUp: {
        position: 'absolute',
        right: 4,
        top: 4,
        ...ArrowPublic
    },
    listTagWrap: {
        flex: 1,
        paddingTop: 10,
        position: 'relative'
    },
    listTagUl: {
        flex: 1,
        marginRight: 100,
        minHeight: 12
    },
    listTagLi: {
        paddingBottom: 5,
        flexDirection:'row'
    },
    tagIconWrap: {
        minWidth: 24,
        borderRadius: 2,
        height: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tagIcon: {
        ...deliveryText
    },
    tagDes: {
        ...deliveryText,
        paddingLeft: 6,
        lineHeight: 12,
        backgroundColor: 'transparent'
    },
    showTagMoreWrap: {
        flexDirection:'row',
        justifyContent: 'flex-end'
    },
    showTagMoreBg: {
        flexDirection:'row',
        minWidth: 50,
        minHeight: 19,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 2,
        paddingRight: 6,
        paddingLeft: 6
    },
    showTagMore: {
        color: '#FFF',
        fontSize: 11,
        paddingRight: 4
    },
    ArrowMoreUp: {
        ...ArrowPublic,
        marginTop: -2
    },
    ArrowMoreDown: {
        ...ArrowPublic,
        marginTop: 3,
        transform: [{rotate: '-135deg'}]
    },
    noticeTipsWrap: {
        marginTop: 10
    },
    noticeTips: {
       flexDirection:'row'
    },
    noticeTitleWrap: {
        width: 24,
        height: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
        borderRadius: 2,
        backgroundColor: '#fff',
        paddingTop: 2,
        paddingBottom: 2,
    },
    noticeTipsTitle: {
        fontSize: 10,
        color: '#333333'
    },
    tipsFont: {
        ...deliveryText,
        backgroundColor: 'transparent',
        marginBottom: 5,
        paddingRight: 26,
        paddingLeft: 6,
        minHeight: 16,
        lineHeight: 16
    },
    tagNumWrap: {
        fontSize: 10,
        height: 20,
        position: 'absolute',
        right: 0,
        top: 72,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 90
    },
    tagTotalTitle: {
        ...deliveryText,
        paddingRight: 4,
        backgroundColor: 'transparent'
        
    }
});