import React from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ProductForYouManData} from '../../constants/ManData/ProductForYouManData';
import ItemProductForYou from './ItemProductForYou';
import {AntDesign} from '@expo/vector-icons';

//const centerProductData = Math.floor(ProductForYouManData.length() / 2);

export default class ProductForYou extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ProductForYouManData,
            itemCount: 4
        }
    }
    
    render() {
        const product = this.state.data.slice(0, this.state.itemCount);
        const column1Data = product.filter((item, i) => i%2 === 0);
        const column2Data = product.filter((item, i) => i%2 === 1);
        return(
            <View style={styles.productForYouWrapper}> 
                <Text style={styles.productForYouText}>Mặt hàng dành cho bạn</Text>
                <View style={styles.line}></View>
                <View style={styles.container}>

                    <View style={styles.column}>
                        
                        <FlatList
                            data={column1Data}
                            renderItem={({ item }) => (
                                <ItemProductForYou item={item}/>
                            )}
                            keyExtractor={(item,index) => index.toString()}
                        />
                    </View>

                    <View style={styles.column}>
            
                        <FlatList
                            data={column2Data}
                            renderItem={({ item }) => (
                                <ItemProductForYou item={item}/>
                            )}
                            keyExtractor={(item,index) => index.toString()}
                        />
                    </View>

                </View>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.seeMoreButton}>
                    <Text style={styles.seeMoreText}>Xem thêm</Text>
                    <AntDesign name="right" style={styles.icon} color='red'/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    productForYouWrapper: {
        marginTop: 4,
        backgroundColor: 'white'
    },
    productForYouText: {
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
        flex: 1,
        flexDirection: 'row',
        marginLeft: 8,
        marginRight: 16
      },
      column: {
        flex: 1,
        flexDirection: 'column'
      },
      row: {
        flexDirection: 'row'
      },
      item: {
        flex: 1
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