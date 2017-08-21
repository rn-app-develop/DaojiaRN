import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    FlatList
} from 'react-native'

export default class StoreList extends Component {

    constructor (props) {
        super(props)
        this.state = {}
    }
   
    render () {    
        return (
           <View style={styles.listWrap}>
               <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                extraData={this.state}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) => 
                    <View style={styles.list}>
                    <Image source={{uri: 'https://static-o2o.360buyimg.com/daojia/new/images/index_sudoku_default_2.0.png'}}
        style={[styles.listImg]} />
                    <View style={styles.listDl}>
                        {/*商品标题*/}
                        <Text numberOfLines={2} style={styles.listDtFont}>[满39减12]韭菜250/g</Text>
                        {/*商品月销售和好评率*/}
                        <View style={styles.listDd}>
                            <Text style={styles.mounthSale}>月售32件</Text>
                            <Text style={styles.mounthSale}>{' '}|{' '}</Text>
                            <Text style={styles.mounthSale}>好评率100%</Text>
                        </View>
                        {/*直降，满减打标*/}
                        <View style={styles.listTags}>
                            <View style={[styles.tagsWrap, {backgroundColor:'#ffce0b'}]} >
                                <Text style={styles.tags}>直降</Text>
                            </View>
                        </View>
                        {/*价格*/}
                        <View style={styles.listTags}>
                            <Text style={styles.normalPrice}>
                                <Text style={styles.priceSmall}>￥</Text>2.5
                            </Text>
                            <Text style={styles.basicPrice}>
                                <Text style={styles.priceSmall}>￥</Text>3.5
                            </Text>
                        </View>
                    </View>
                    {/*添加到购物车按钮*/}
                    <View style={styles.addCartWrap}>
                        <View style={[styles.cartBtnWrap]}>
                            <Image source={{uri: 'https://static-o2o.360buyimg.com/daojia/new/images/icon/addNumSprite.png'}}
        style={[styles.cartBtn, styles.reduceCart]} />
                        </View>
                        <Text style={[styles.cartNum]}>2</Text>
                        <View style={[styles.cartBtnWrap]}>
                            <Image source={{uri: 'https://static-o2o.360buyimg.com/daojia/new/images/icon/addNumSprite.png'}}
        style={[styles.cartBtn, styles.addCart]} />
                        </View>
                        
                    </View>
               </View>
                }
                />
               
           </View> 
        )
    }
}
const publicFont = {
        fontSize: 11,
        color: '#999999'
}
const styles = StyleSheet.create({
   listWrap: {
        // paddingBottom: 20
    },
    list: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        position: 'relative'
    },
    listImg: {
        paddingTop: 4,
        borderRadius: 2,
        width: 65,
        height: 65
    },
    listDl: {
        flex: 1,
        marginLeft: 10
    },
    listDtFont: {
        lineHeight: 21,
        fontSize: 14,
        color: '#666666'
    },
    listDd: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 1,
        alignItems: 'center'
    },
    mounthSale: {
        ...publicFont
    },
    listTags: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 1,
        alignItems: 'center'
    },
    tagsWrap: {
        borderRadius: 2,
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 2,
        paddingRight: 2,
        height: 16,
        justifyContent: 'center'
    },
    tags: {
        color: '#ffffff',
        fontSize: 10
    },
    normalPrice: {
        fontSize: 16,
        color: '#ff3434',
        paddingTop: 2
    },
    priceSmall: {
        fontSize: 10
    },
    basicPrice: {
        textDecorationLine: 'line-through',
        paddingTop: 4,
        paddingLeft: 5,
        fontSize: 13,
        color: '#999999'
    },
    addCartWrap: {
        flex: 1,
        position: 'absolute',
        right: 6,
        bottom: 0,
        flexDirection: 'row'
    },
    cartBtnWrap: {
        position: 'relative',
        width: 28,
        height: 28.5,
        marginBottom: 7,
        marginTop: 6,
        // marginLeft: 6,
        // marginRight: 6,
        overflow: 'hidden'
        
    },
    cartBtn: {
        position: 'absolute',
        top: 0,
        width: 112,
        height: 28.5
    },
    addCart: {
        left: 0
    },
    reduceCart: {
        left: -42
    },
    cartNum: {
        width: 24,
        height: 28,
        lineHeight: 28,
        textAlign: 'center',
        color: '#333333',
        fontSize: 12,
        marginTop: 6
    }
});