import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native'

export default class StoreSearch extends Component {

    constructor (props) {
        super(props)
        this.state = {}
    }
   
    render () {    
        return (
            
                <View style={styles.storeSearchWrap}>
                   <View style={styles.storeSearchInput}>
                       <View style={styles.searchIconWrap}>
                            <Image source={{uri: 'https://static-o2o.360buyimg.com/daojia/new/images/icon/search_bar_sprites.png'}}
       style={styles.searchIcon} />
                       </View>
                       <Text style={styles.searchText}>搜索店内商品</Text>
                   </View>
                </View>
            
                
        )
    }
}

const styles = StyleSheet.create({
    storeSearchWrap: {
        backgroundColor: '#eaeaea',
        height: 40,
        lineHeight: 40,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    storeSearchInput: {
        backgroundColor: '#ffffff',
        borderRadius: 2,
        height: 28,
        flexDirection:'row',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    searchIconWrap: {
        width: 25,
        height: 44,
        overflow: 'hidden',
        marginLeft: 2
    },
    searchIcon: {   
        width: 25,
        height: 176
    },
    searchText: {
        fontSize: 13,
        color: '#999999'
    }
});