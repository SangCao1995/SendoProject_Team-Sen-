import React from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RecommendManData} from '../../constants/ManData/RecommendManData';
import ItemRecommend from './ItemRecommend';

export default class FlatListBasics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: RecommendManData,
            itemsCount: 3 
        }
    }
    // renderNewItem = () => {
    //     if (this.state.itemsCount < data.length) {
    //       this.setState((prevState) => ({ itemsCount: (prevState.itemsCount + 1) }));
    //     }
    //   }
    render() {
        return(
            <View>
                <FlatList
                    data={this.state.data.slice(0, this.state.itemsCount)}
                    //keyExtractor={(item, index) => item.key }
                    renderItem={({ item }) => {
                        return(
                            <ItemRecommend item={item}/>
                        );
                    }}
                    keyExtractor={(item,index) => index.toString()}
                />
            </View>
        );
    }
}
