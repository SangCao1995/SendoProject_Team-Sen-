import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FlatListBasics from './FlatListBasics';
import {AntDesign} from '@expo/vector-icons';

export default class Recommend extends React.Component {
    render() {
        return(
            <View style={styles.recommendWrapper}>
                <Text style={styles.recommendText}>Sản phẩm đề cử cho bạn</Text>
                <View style={styles.line}></View>
                <FlatListBasics/>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.seeMoreButton} onPress={this.props.onPressButton}>
                    <Text style={styles.seeMoreText}>Xem thêm</Text>
                    <AntDesign name="right" style={styles.icon} color='red'/>
                </TouchableOpacity>
            </View>
        ); 
    }
}

const styles = StyleSheet.create({
    recommendWrapper: {
        marginTop: 4,
        backgroundColor: 'white'
    },
    recommendText: {
        fontSize: 18,
        lineHeight: 21,
        fontFamily: 'Roboto',
        marginTop: 8,
        marginLeft: 16
    },
    line: {
        marginTop: 8,
        width: 328,
        marginLeft: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    seeMoreButton: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        alignItems: 'center',
        marginBottom: 8
    },
    seeMoreText: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Roboto',
        color: 'red'
    },
    icon: {
        marginLeft: 240
    }
})