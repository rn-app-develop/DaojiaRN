import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Dimensions
} from 'react-native'

const winW = Dimensions.get('window').width
export default class StoreName extends Component {

    constructor (props) {
        super(props)
        this.state = {}
    }
   
    render () {    
        return (
                <View style={styles.storePublicTitle}>
                    <View style={styles.leftLines}></View>
                    <Text style={styles.publicStoreTitle}>{this.props.title}</Text>
                    <View style={styles.leftLines}></View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    storePublicTitle: {
        marginBottom: 20,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftLines: {
        width: (winW - 120) / 2,
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
    },
    publicStoreTitle: {
        fontSize: 15,
        color: '#FFF',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        width: 100,
        textAlign: 'center'
    }
});