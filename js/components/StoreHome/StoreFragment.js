import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native'

export default class StoreFragment extends Component {

    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {    
        return (
                <View style={styles.storeCommentWrap}>
                    {this.props.children}
                </View>
        )
    }
}

const styles = StyleSheet.create({
   
    storeCommentWrap: {
        // minHeight: 20,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        marginTop: -1,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 3,
    }
});