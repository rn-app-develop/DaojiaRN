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

const winW = Dimensions.get('window').width
export default class StoreComment extends Component {

    constructor (props) {
        super(props)
        this.state = {}
    }
    gotoGoodDetails (e) {
        
    }
    GotoAllComments (e) {}
    render () {    
        return (
            <View style={styles.storeCommentCrap}>
                {/*标题*/}
                <StoreName title="店铺评价"></StoreName>
                {/*评价内容*/}
                <StoreFragment>
                    <View style={styles.storeCommentTitle}>
                        <View style={[styles.storeScoreWrap, styles.storeScoreWrapLine]}>
                            <Text style={styles.storeScore}>33</Text>
                            <Text style={styles.storeScoreTitle}>综合评分</Text>
                        </View>
                        <View style={styles.storeScoreWrap}>
                            <Text style={styles.storeScore}>9999+</Text>
                            <Text style={styles.storeScoreTitle}>评论数</Text>
                        </View>
                    </View>
                    <StoreDashed></StoreDashed>

                    <View style={styles.commentUsersList}>
                        <Image source={{uri: 'https://static-o2o.360buyimg.com/daojia/new/images/store/evaluateHeader.jpg'}}
       style={styles.headerPic} />
                        <View style={styles.evaluateList}>
                            <View style={styles.evaluateTitle}>
                                <Text style={styles.pName} numberOfLines={1}>yan***quyan***quyan***quyan***quyan***quyan***qu</Text>
                                <Text style={styles.dataTime}>2017-07-17 15:35:56</Text>
                            </View>
                            {/*星级评分*/}
                            <View style={styles.starWrap}>
                                <View style={styles.starBox}>
                                    <Image source={{uri: 'https://static-o2o.360buyimg.com/daojia/new/images/icon/newStar.png'}}
       style={[styles.starPos]} />
                                </View>
                                <View style={styles.starBox}>
                                    <Image source={{uri: 'https://static-o2o.360buyimg.com/daojia/new/images/icon/newStar.png'}}
       style={[styles.starPos]} />
                                </View>
                                <View style={styles.starBox}>
                                    <Image source={{uri: 'https://static-o2o.360buyimg.com/daojia/new/images/icon/newStar.png'}}
       style={[styles.starPos]} />
                                </View>
                                <View style={styles.starBox}>
                                    <Image source={{uri: 'https://static-o2o.360buyimg.com/daojia/new/images/icon/newStar.png'}}
       style={[styles.starPos, styles.starGrey]} />
                                </View>
                                <View style={styles.starBox}>
                                    <Image source={{uri: 'https://static-o2o.360buyimg.com/daojia/new/images/icon/newStar.png'}}
       style={[styles.starPos, styles.starGrey]} />
                                </View>

                            </View>
                            {/*用户评论*/}
                            <Text style={styles.userComment}>水果不是很新鲜的，都坏了</Text>
                            {/*评价商品*/}
                            <View style={styles.commentFontsBox}>
                                <Image source={{uri: 'https://static-o2o.360buyimg.com/daojia/new/images/store/serviceMark.png'}}
       style={styles.peisongMark} />
                                <View style={styles.serviceWrap}>
                                    <Text style={styles.pieceFont}>口味佳</Text>
                                    <Text style={styles.pieceFont}>口味佳</Text>
                                    <Text style={styles.pieceFont}>口味佳</Text>
                                    <Text style={styles.pieceFont}>口味佳</Text>
                                    <Text style={styles.pieceFont}>口味佳</Text>
                                    <Text style={styles.pieceFont}>口味佳</Text>
                                    <Text style={styles.pieceFont}>口味佳</Text>
                                    <Text style={styles.pieceFont}>口味佳</Text>
                                    <Text style={styles.pieceFont}>口味佳</Text>
                                </View>
                            </View>
                            {/*商家回复*/}
                            <View style={styles.merchantReply}>
                                <View style={styles.markBtn}></View>
                                <View style={styles.topLineWrap}>
                                    <View style={styles.leftLine}></View>
                                    <View style={styles.rightLine}></View>
                                </View>
                                                         
                                <Text style={styles.content}>商家回复：我是商家回复内容</Text>
                            </View>
                            {/*点赞的商品*/}
                            <View style={styles.productWrap}>
                                <View style={styles.fingerBox}>
                                    <Image source={{uri: 'https://static-o2o.360buyimg.com/daojia/new/images/store/spriteZan.png'}}
       style={styles.fingerMark} />
                                </View>
                                <View style={styles.singleProWrap}>
                                    <TouchableWithoutFeedback onPress={e => {this.gotoGoodDetails(e)}}>
                                        <View style={styles.singleProBorder}>
                                            <Text style={styles.singlePro} numberOfLines={1}>农夫三泉饮用矿泉水</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </View>
                    </View>
                    <StoreDashed></StoreDashed>
                    {/*查看全部评价按钮*/}
                    <TouchableWithoutFeedback onPress={e => {this.GotoAllComments(e)}}>
                        <Text style={styles.GotoAllComments}>查看用户的全部评价{' '}></Text>
                    </TouchableWithoutFeedback>
                </StoreFragment>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    storeCommentCrap: {
        paddingTop: 25
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
    storeScore: {
        flex: 1,
        fontSize: 27,
        fontWeight: 'bold',
        height: 36,
        lineHeight: 36,
        color: '#fff'
    },
    storeScoreTitle: {
        fontSize: 12,
        color: '#fff',
        height: 18,
        lineHeight: 18
    },
    commentUsersList: {
        paddingTop: 20,
        paddingBottom: 10,
        flexDirection:'row',
        overflow: 'hidden'
    },
    headerPic: {
        width: 35,
        height: 35,
        borderRadius: 18
    },
    evaluateList: {
        marginLeft: 5,
        flex: 1
    },
    evaluateTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pName: {
        color: '#ffffff',
        fontSize: 14,
        width: winW - 210,
        lineHeight: 16
    },
    dataTime: {
        fontSize: 12,
        color: '#ffffff',
        lineHeight: 16,
        textAlign: 'right'
    },
    starWrap: {
        paddingTop: 8,
        flexDirection: 'row'
    },
    starBox: {
        position: 'relative',
        width: 10,
        height: 10,
        overflow: 'hidden',
        marginRight: 1
    },
    starPos: {
        position: 'absolute',
        top: 0,
        left: 0, 
        flex: 1,
        width: 50,
        height: 10
    },
    starGrey: {
        left: -40
    },
    userComment: {
        fontSize: 13,
        color: '#ffffff',
        paddingTop: 11,
        paddingRight: 10
    },
    commentFontsBox: {
        marginTop: 10,
        flexDirection: 'row'
    },
    peisongMark: {
        width: 13,
        height: 18,
        marginTop: 1
    },
    serviceWrap: {
        flex: 1,
        marginLeft: 7,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    pieceFont: {
        marginRight: 8,
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
        height: 22,
        lineHeight: 22,
    },
    merchantReply: {
        marginTop: 11,
        marginRight: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor:'rgba(255,255,255,0.6)',
        borderTopColor:'transparent',
        borderRadius: 2,
        position: 'relative'
    },
    markBtn: {
        position: 'absolute',
        top: -2,
        left: 10,
        width: 5,
        height: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor:'transparent',
        borderTopColor:'rgba(255,255,255,0.6)',
        borderRightColor:'rgba(255,255,255,0.6)',
        transform: [{rotate: '-45deg'}]
    },
    topLineWrap: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        flexDirection: 'row'
    },
    leftLine: {
        width: 10,
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.6)'
    },
    rightLine: {
        flex: 1,
        marginLeft: 5,
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.6)'
    },
    content: {
        paddingLeft: 8,
        paddingRight: 3,
        lineHeight: 24,
        color: 'rgba(255,255,255,0.6)',
        fontSize: 13
    },
    productWrap: {
        marginTop: 19,
        flexDirection: 'row'
    },
    fingerBox: {
        marginTop: 2,
        position: 'relative',
        width: 18,
        height: 18,
        overflow: 'hidden',
        marginRight: 1
    },
    fingerMark: {
        position: 'absolute',
        top: 0,
        left: -12, 
        flex: 1,
        width: 42,
        height: 18
    },
    singleProWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        lineHeight: 22,
        maxHeight: 64,
        overflow: 'hidden'
    },
    singleProBorder: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor:'rgba(255,255,255,0.6)',
        borderRadius: 3,
        marginLeft: 10,
        marginBottom: 10,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 3,
        paddingRight: 3,
        height: 22,
        // width: 92,
        maxWidth: 100,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    singlePro: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 12,     
    },
    GotoAllComments: {
        height: 46,
        lineHeight: 46,
        textAlign: 'center',
        fontSize: 14,
        color: '#ffffff'
    }
});