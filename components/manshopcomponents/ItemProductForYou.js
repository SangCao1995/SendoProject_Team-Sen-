import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

export default function ItemProductForYou(props) {
    return(
        <TouchableOpacity style={styles.itemProductForYouWrapper}>
            <Image style={styles.image} 
                source={{uri: props.item.Image}}/>
            <Text style={styles.text}>{props.item.CategoryName}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemProductForYouWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginLeft: 8
    },
    image: {
        width: 168,
        height: 168
    },
    text: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Roboto',
        marginTop: 4
    }
})