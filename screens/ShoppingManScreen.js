import React from 'react';
import {ScrollView, View, StyleSheet, Text, FlatList} from 'react-native';
import Shopping from '../components/shoppingmancomponents/Shopping';

export default class ShoppingManScreen extends React.Component {
    render() {
        const isOnPressRecommend = this.props.isOnPressRecommend;
        const isOnPressFashion = this.props.isOnPressFashion;
        return(
            <View style={styles.container}>
                <Shopping isOnPressManRecommend={isOnPressRecommend}
                isOnPressManFashion={isOnPressFashion}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})