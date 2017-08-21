import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'

export default class CateChild extends Component {

    constructor (props) {
        super(props)
        this.state = {}
    }
   cateChildClick (e, index, Item, childIndex) {
        Item.childCategoryList.forEach((childObj, num) => {
          if (num === childIndex) {
            childObj.openCatetory ? '' : this.props.SetChildCate(index, 'openCatetory', num, true)
          } else {
            childObj.openCatetory ? this.props.SetChildCate(index, 'openCatetory', num, false) : ''
          }
        })
   }
    render () {
        let Item = this.props.Item
        let childItem = this.props.childItem
        let Index = this.props.Index
        let childIndex = this.props.childIndex
        return (
            <TouchableWithoutFeedback onPress={e => {this.cateChildClick(e, Index, Item, childIndex)}}>
                <View style={[styles.cateListWrap, childItem.openCatetory ? styles.cateListWrapActive : null ]}>
                    {
                        childItem.openCatetory ? (<View style={styles.cateLeftBorder}></View>) : null
                    }
                    <Text numberOfLines={2} style={[styles.cateListTitle, childItem.openCatetory ? styles.cateListTitleActive : null]}>{childItem.title}</Text>
                </View> 
            </TouchableWithoutFeedback>  
        )
    }
}

const styles = StyleSheet.create({
    cateListWrap: {
        height: 46,
        paddingLeft: 10,
        paddingRight: 4,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderStyle: 'solid',
        borderRightWidth: 1,
        borderColor:'#e8e8e8'
    },
    cateListTitle: {   
        fontSize: 12,
        color: '#666666',
        lineHeight: 23,
    },
    cateListWrapActive: {
        paddingLeft: 0,
        borderRightWidth: 0,
    },
    cateLeftBorder: {
        borderStyle: 'solid',
        borderLeftWidth: 1,
        borderColor:'#47b34f',
        height: 46,
        width: 0,
        marginRight: 10
    },
    cateListTitleActive: {
        color: '#47b34f'
    }
});