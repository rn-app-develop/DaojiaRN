import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native'
import StoreName from './StoreName.js'
import StoreFragment from './StoreFragment.js'
import StoreDashed from './StoreDashed.js'

export default class StoreInfo extends Component {

    constructor (props) {
        super(props)
        this.state = {}
    }
    payForDelay(e) {}
    render () {    
        return (
            <View style={styles.storeInfoWrap}>
                {/*标题*/}
                <StoreName title="店铺信息"></StoreName>
                {/*店铺信息内容*/}
                <StoreFragment>
                    <View style={styles.storeCommentTitle}>
                       <TouchableWithoutFeedback onPress={e => {this.payForDelay(e)}}>
                        <View style={[styles.storeScoreWrap, styles.storeScoreWrapLine]}>
                             <Image source={{uri: 'https://img30.360buyimg.com/mobilecms/jfs/t3289/113/4719052331/3944/a60eda23/58535991N127211a5.png'}}
       style={[styles.inforImg]} />
                            <Text style={styles.storeScoreTitle}>超时赔付{' '}></Text>
                        </View>
                       </TouchableWithoutFeedback>
                       <TouchableWithoutFeedback onPress={e => {this.payForDelay(e)}}>
                        <View style={styles.storeScoreWrap}>
                            <Image source={{uri: 'https://img30.360buyimg.com/mobilecms/jfs/t3289/113/4719052331/3944/a60eda23/58535991N127211a5.png'}}
       style={[styles.inforImg]} />
                            <Text style={styles.storeScoreTitle}>超时赔付{' '}></Text>
                        </View>
                       </TouchableWithoutFeedback>
                    </View>
                    <StoreDashed></StoreDashed>
                    <View style={styles.infoBox}>
                        <View style={styles.infoList}>
                            <Text style={styles.infoListName}>商品数量：</Text>
                            <Text numberOfLines={3} style={styles.infoListContent}>981</Text>
                        </View>
                        <View style={styles.infoList}>
                            <Text style={styles.infoListName}>月销单量：</Text>
                            <Text numberOfLines={3} style={styles.infoListContent}>154单</Text>
                        </View>
                         <View style={styles.infoList}>
                            <Text style={styles.infoListName}>关注人数：</Text>
                            <Text numberOfLines={3} style={styles.infoListContent}>154人</Text>
                        </View>
                        <View style={styles.infoList}>
                            <Text style={styles.infoListName}>营业时间：</Text>
                            <Text numberOfLines={3} style={styles.infoListContent}>07:00-22:00</Text>
                        </View>
                        <View style={styles.infoList}>
                            <Text style={styles.infoListName}>门店地址：</Text>
                            <Text numberOfLines={3} style={styles.infoListContent}>北京丰台区枫桥八号院加2号院一层10（距您1.54KM）</Text>
                        </View>
                        <View style={styles.infoList}>
                            <Text style={styles.infoListName}>门店电话：</Text>
                            <Text numberOfLines={3} style={[styles.infoListContent,styles.telStyle]}>15510345688</Text>
                        </View>
                        <StoreDashed></StoreDashed>
                        <View style={styles.infoListLinks}>
                            <Text style={styles.infoListLinksName}>商家资质</Text>
                            <View style={styles.infoListArrow}></View>
                        </View>
                        <StoreDashed></StoreDashed>
                        <View style={styles.infoListLinks}>
                            <Text style={styles.infoListLinksName}>举报商家得红包</Text>
                            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                                <Text style={styles.infoListLinksName}>最高奖100元</Text>
                                <View style={styles.infoListArrow}></View>
                            </View>
                        </View>
                    </View>
                    
                </StoreFragment>
            </View>
        )
    }
}
const fontStyle = {
    fontSize: 14,
    color: '#ffffff',
    lineHeight: 24
}
const styles = StyleSheet.create({
    storeInfoWrap: {
        paddingTop: 25,
        paddingBottom: 35
    },
    storeCommentTitle: {
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row'
    },
    storeScoreWrap: {
        flex: 1,
        minHeight: 54,
        alignItems: 'center'
    },
    storeScoreWrapLine: {
        borderStyle:'solid',
        borderWidth: 1,
        borderTopColor:'transparent',
        borderLeftColor:'transparent',
        borderBottomColor:'transparent',
        borderRightColor:'#e8e8e8'
    },
    storeScoreTitle: {
        fontSize: 12,
        color: '#fff',
        height: 18,
        lineHeight: 18
    },
    inforImg: {
        width: 28,
        height: 36
    },
    infoBox: {
        paddingTop: 20,
        paddingBottom: 5
    },
    infoList: {
        marginBottom: 5,
        flexDirection: 'row'
    },
    infoListName: {
        ...fontStyle
    },
    infoListContent: {
        ...fontStyle,
        flex: 1,
        marginRight: 20,
        lineHeight: 28
    },
    telStyle: {
        textDecorationLine: 'underline'
    },
    infoListLinks: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 48
    },
    infoListLinksName: {
        ...fontStyle
    },
    infoListArrow: {
        width: 8,
        height: 8,
        borderStyle:'solid',
        borderWidth: 1,
        borderTopColor:'transparent',//下箭头颜色
        borderLeftColor:'transparent',//右箭头颜色
        borderBottomColor:'#fff',//上箭头颜色
        borderRightColor:'#fff',//左箭头颜色
        transform: [{rotate: '-45deg'}],
        marginTop: 1
    }
});