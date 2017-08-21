import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'
import StoreName from './StoreName.js'

export default class StoreCoupon extends Component {

    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {    
        return (
            <View style={styles.StoreCouponWrap}>
                {/*标题*/}
                <StoreName title="店铺优惠券"></StoreName>
                {/*店铺优惠券*/}
                    <View style={styles.couponList}>
                            <View style={styles.couponBorder}></View>
                            {/*券的面值*/}
                            <View style={styles.couponLeft}>
                                <Text style={styles.couponNum}>8</Text>
                                <Text style={styles.conponUnit}>元</Text>
                            </View>
                            {/*券的标题，信息*/}
                            <View style={styles.couponTitleWrap}>
                                    <View style={styles.couponH2Wrap}>
                                        <Text style={styles.discountTxt}>满29元可用</Text>
                                        <Text style={styles.discountDate}>2017.06.21-2017.06.21</Text>
                                        <Text style={styles.discountDate}>2017.06.21-2017.06.21</Text>
                                    </View>                           
                            </View>
                            {/*领券的按钮*/}
                            <Image source={{uri: 'https://static-o2o.360buyimg.com/daojia/new/images/store/store_new_conpon.png'}}
       style={styles.middleBg} />
                            <View style={styles.couponRightBox}>
                                <View style={styles.couponGet}>
                                    <Text style={styles.couponGetBtn}>已领取</Text>
                                </View>
                            </View>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    StoreCouponWrap: {
       paddingTop: 20
    },
    couponList: {
        height: 70,
        marginTop: 9,
        marginBottom: 9,
        marginLeft: 9,
        marginRight: 9,
        flexDirection: 'row',
        alignItems: 'center'
    },
    couponBorder: {
        borderStyle: 'solid',
        borderLeftWidth: 3,
        borderColor:'#ff5757',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 0,
        height: 70,
        width: 0
    },
    couponLeft: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor:'transparent',
        borderTopColor:'#eaeaea',
        borderBottomColor:'#eaeaea',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 56,
        backgroundColor: '#ffffff'
    },
    couponNum: {
        color: '#ff4f64',
        fontFamily: 'Helvetica',
        fontSize: 20,
        paddingRight: 3
     },
     conponUnit: {
        color: '#ff4f64',
        fontSize: 15,
        marginTop: 2,
        marginLeft: -4
    },
    couponTitleWrap: {
        height: 70,
        flex: 1,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor:'transparent',
        borderTopColor:'#eaeaea',
        borderBottomColor:'#eaeaea',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    couponH2Wrap: {
        left: 6,
        paddingRight: 11
    },
    discountTxt: {
        color: '#333333',
        fontSize: 14,
        marginBottom: 4,
        marginRight: 4
    },
    discountDate: {
        color: '#999999',
        fontSize: 11,
        marginBottom: 3
    },
    middleBg: {
        width: 10,
        height: 70
    },
    couponRightBox: {
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor:'#eaeaea',
        borderLeftColor:'transparent',
        borderTopLeftRadius: 1,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 5,
        height: 70,
        width: 61,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    couponGet: {
        backgroundColor: '#ff5757',
        borderRadius: 9,
        height: 18,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    couponGetBtn: {
        color: '#fefffe',
        fontSize: 11
    }
});