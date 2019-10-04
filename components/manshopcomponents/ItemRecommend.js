import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';

export default function ItemRecommend(props) {
    return(
        <TouchableOpacity style={styles.itemWrapper}>
            <Image source={{uri: props.item.Image}} style={styles.image}/>
            <View style={styles.textWrapper}>
                <Text style={styles.price}>{props.item.Price}</Text>
                <Text style={styles.productName}>{props.item.ProductName}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemWrapper: {
        marginTop: 8,
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 120
    },
    image: {
        width: 112,
        height: 112
    },
    textWrapper: {
        marginLeft: 16,
        flexDirection: 'column'
    },
    price: {
        fontSize: 18,
        lineHeight: 21,
        fontFamily: 'Roboto'
    },
    productName: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'Roboto',
        marginTop: 3,
    }
})