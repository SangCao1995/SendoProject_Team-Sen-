import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {FashionManData} from '../../constants/ManData/FashionManData';
import ItemFashionMan from './ItemFashionMan';
import {AntDesign} from '@expo/vector-icons';


const numColumns = 3;

export default class FashionMan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: FashionManData
        }
    }
    render() {
        return(
            <View style={styles.fashionManWrapper}>
                <Text style={styles.fashionManText}>Thời trang nam</Text>
                <View style={styles.container}>
                    <FlatList data={this.state.data}
                        renderItem={({ item }) => (
                            <ItemFashionMan item={item} />
                        )}
                        numColumns={numColumns}
                        keyExtractor={(item,index) => index.toString()} />
                </View> 
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
    fashionManWrapper: {
        marginTop: 4,
        backgroundColor: 'white'
    },
    fashionManText: {
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
    container: {
        marginTop: 4,
        marginLeft: 12,
        marginRight: 16
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