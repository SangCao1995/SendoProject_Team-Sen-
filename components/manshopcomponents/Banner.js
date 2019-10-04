import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default class Banner extends React.Component {
    render() {
        return(
            <View style={styles.bannerWrapper}>
                <Text style={styles.bannerText}>Dạo chợ Thời trang nam</Text>
                <TouchableOpacity style={styles.imageWrapper} onPress={this.props.onPressButton}>
                   <Image style={styles.image}
                        source={{uri: 'https://znews-photo.zadn.vn/w660/Uploaded/ycgmvjvj/2018_04_16/9_2.jpg'}}/> 
                </TouchableOpacity>
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
    image: {
        width: '100%',
        height: 352,
        resizeMode: 'stretch'
    },
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',  
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8
    },
    bannerWrapper: {
        marginTop: 4,
        backgroundColor: 'white'
    },
    bannerText: { 
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