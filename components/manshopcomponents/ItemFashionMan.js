import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function ItemFashionMan(props) {
    return(
        <TouchableOpacity style={styles.itemFashionMan}>
            <Image source={{uri: props.item.Image}}
                style={styles.image}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 112,
        height: 112
    },
    itemFashionMan: {
        marginTop: 4,
        marginLeft: 4
    }
})