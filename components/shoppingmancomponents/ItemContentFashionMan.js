import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text} from 'react-native';

export default function ItemContentFashionMan(props) {
    return(
        <TouchableOpacity style={styles.itemContentFashionManWrapper}>
            <Image style={styles.image} source={{uri: props.item.Image}}/>
            <Text style={styles.productNameText}>{props.item.ProductName}</Text>
            <Text style={styles.priceText}>{props.item.Price}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 176,
        height: 168
    },
    productNameText: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Roboto',
        marginTop: 4
    },
    priceText: {
        fontSize: 18,
        lineHeight: 21,
        fontFamily: 'Roboto',
        color: '#D90429',
        marginTop: 4
    },
    itemContentFashionManWrapper: {
        width: 176,
        marginTop: 8,
        marginLeft: 8
    }
})