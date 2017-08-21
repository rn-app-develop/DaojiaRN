import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'

export default class Cate extends Component {

    constructor (props) {
        super(props)
        this.state = {}
    }
    cateClick (e, index, item) {
       let openCate = item.openCatetory

       this.props.cateList.forEach((obj, idx) => {
          if (idx === index) {
            if (openCate) {
              // 当前一级分类隐藏
              this.props.SetCateList(index, 'openCatetory', false)
              this.props.SetCateList(index, 'active', true)
            } else {
              // 当前一级分类展开
              this.props.SetCateList(index, 'openCatetory', true)
              this.props.SetCateList(index, 'active', false)
              // 当前二级分类选中第一个
              obj.childCategoryList && obj.childCategoryList.forEach((secObj, num) => {
                if (num === 0) {
                  secObj.openCatetory ? '' : this.props.SetChildCate(idx, 'openCatetory', num, true)
                } else {
                  secObj.openCatetory ? this.props.SetChildCate(idx, 'openCatetory', num, false) : ''
                }
              })
            }
          } else {
            // 其他一级分类隐藏
            this.props.SetCateList(idx, 'openCatetory', false)
            this.props.SetCateList(idx, 'active', false)
            // this.setState({active: false});
            // 其他二级分类不选中
            obj.childCategoryList && obj.childCategoryList.forEach((secObj, num) => {
              secObj.openCatetory ? this.props.SetChildCate(idx, 'openCatetory', num, false) : ''
            })
          }
        })
   }

    render () {
        let Item = this.props.Item
        let Index = this.props.Index
        let cateOpen = Item.openCatetory && Item.childCategoryList.length > 0
        let cateClose = Item.openCatetory && Item.childCategoryList.length < 1  
        return (
            <TouchableWithoutFeedback onPress={e => {this.cateClick(e, Index, Item)}}>

                <View style={[styles.category, (Item.active || cateClose) ? styles.categoryActiveClose : null]}>
                    {
                        (Item.active || (Item.openCatetory && Item.childCategoryList.length < 1)) ? (
                            <View style={styles.cateLeftBorder}></View>
                        ) : null
                    }
                    
                    <Text numberOfLines={2} style={[styles.categoryTitle, cateOpen ? styles.categoryTitleOpen : null, (Item.active || cateClose) ? styles.categoryTitleClose : null]}>{Item.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    category: {
        height: 46,
        paddingLeft: 10,
        paddingRight: 4,
        backgroundColor: '#f4f4f4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderStyle: 'solid',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor:'#e8e8e8'
    },
    categoryTitle: {
        lineHeight: 20,
        fontSize: 13,
        color: '#666666'
    },
    categoryTitleOpen: {
        color: '#47b34f'
    },
    categoryActiveClose: {
        backgroundColor: '#ffffff',
        paddingLeft: 0,
        borderRightWidth: 0
    },
    categoryTitleClose: {
        color: '#47b34f'
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