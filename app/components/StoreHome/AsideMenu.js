import React, {Component} from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'

import Cate from './Cate.js'
import CateChild from './CateChild.js'
export default class AsideMenu extends Component {

    constructor (props) {
        super(props)
        this.state = {
            cateList: []
        }
    }
   componentWillMount () {
       this.state.cateList = [
            {
                "catId": "",
                "parentId": "",
                "title": "当日特惠",
                "productCount": 16,
                "childCategoryList": [
                    {
                        "catId": "4258424",
                        "parentId": "4258418",
                        "title": "奶品",
                        "productCount": 5,
                        "sort": 0,
                        "level": 2,
                        "childCategoryList": [],
                        "promotLabel": "",
                        "ispromotcat": false,
                        "user_action": "{\"cateid1\":\"4258418\",\"cateid2\":\"4258424\",\"catename1\":\"日配冷藏\",\"catename2\":\"奶品\",\"store_id\":\"11679834\"}",
                        "openCatetory": true
                    }
                ],
                "promotLabel": "3",
                "ispromotcat": true,
                "user_action": "{\"cateid1\":\"#102\",\"catename1\":\"当日特惠\",\"store_id\":\"11679834\"}",
                "openCatetory": true
            },
            {
                "catId": "4258418",
                "parentId": "0",
                "title": "日配冷藏",
                "productCount": 14,
                "sort": 5,
                "level": 1,
                "childCategoryList": [
                    {
                        "catId": "4258424",
                        "parentId": "4258418",
                        "title": "奶品",
                        "productCount": 5,
                        "sort": 0,
                        "level": 2,
                        "childCategoryList": [],
                        "promotLabel": "",
                        "ispromotcat": false,
                        "user_action": "{\"cateid1\":\"4258418\",\"cateid2\":\"4258424\",\"catename1\":\"日配冷藏\",\"catename2\":\"奶品\",\"store_id\":\"11679834\"}",
                        "openCatetory": false
                    },
                    {
                        "catId": "4258419",
                        "parentId": "4258418",
                        "title": "冷冻食品",
                        "productCount": 2,
                        "sort": 2,
                        "level": 2,
                        "childCategoryList": [],
                        "promotLabel": "",
                        "ispromotcat": false,
                        "user_action": "{\"cateid1\":\"4258418\",\"cateid2\":\"4258419\",\"catename1\":\"日配冷藏\",\"catename2\":\"冷冻食品\",\"store_id\":\"11679834\"}",
                        "openCatetory": false
                    }
                ],
                "promotLabel": "",
                "ispromotcat": false,
                "user_action": "{\"cateid1\":\"4258418\",\"catename1\":\"日配冷藏\",\"store_id\":\"11679834\"}",
                "openCatetory": false
            }
            ]
   }
   setCateList (index, attr, flag) {

       let cateList = this.state.cateList;
       cateList[index][attr] = flag

       this.setState(previousState => {
             return { cateList: cateList };
        });

   }
   setChildCate (index, attr, secNum, flag) {
        let cateList = this.state.cateList;
        cateList[index].childCategoryList[secNum][attr] = flag

        this.setState(previousState => {
             return { cateList: cateList };
        });
   }
    render () {    
        return (
                <ScrollView style={styles.menuAside}>
                    {
                        this.state.cateList.map((item, index) => {
                            return (
                                <View>
                                    {item ? (
                                            <Cate Item={item} Index={index} cateList={this.state.cateList} SetCateList={this.setCateList.bind(this)} SetChildCate={this.setChildCate.bind(this)} ></Cate>                                        
                                        ) : null}
                                    
                                    {item && item.openCatetory ? (
                                        <View style={styles.secondCateList}>
                                            {item.childCategoryList && item.childCategoryList.length > 0 ? (
                                                item.childCategoryList.map((childItem, childIndex) => {
                                                    return (
                                                        <CateChild Index={index} Item={item} childIndex={childIndex} childItem={childItem} cateList={this.state.cateList} SetChildCate={this.setChildCate.bind(this)}></CateChild>                                           
                                                            
                                                    )
                                                })
                        
                                            ) : null }
                                        </View>
                                    ) : null}
                                    
                                    
                                </View>
                            )                        
                        })
                    }
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    menuAside: {
        position: 'relative',
        // height: 100,
        backgroundColor: '#f4f4f4',
        paddingBottom: 62,
        width: 84
    }


});