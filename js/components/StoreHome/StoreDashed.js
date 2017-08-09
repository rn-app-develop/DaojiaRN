import React, {Component} from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'

export default class StoreDashed extends Component {

    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {    
        return (                      
            <View style={styles.bottomLineWrap}>
                {/*ios不支持borderStyle: 'dashed'和borderBottomColor*/}
                <View style={styles.bottomLineDashed}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottomLineWrap: {
        height: 1,
        overflow: 'hidden'
    },
    bottomLineDashed: {
        height: 2,
        borderStyle: 'dashed',
        borderWidth: 0.5,
        borderColor:'rgba(236, 236, 236, 0.5)',
    }
});